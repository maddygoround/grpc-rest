package main

import (
	"context"
	"flag"
	haberdasher "github.com/maddygoround/example/proto/build/go/service/api"
	"net/http"
	"github.com/golang/glog"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
)

var grpcEndpoint = flag.String("grpc-server-endpoint","localhost:50051","GRPC Server endpoint")

func run() error {
 ctx := context.Background()
 ctx, cancel := context.WithCancel(ctx)
 defer cancel()

 mux := runtime.NewServeMux()
  opts := []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())}
  err := haberdasher.RegisterHaberdasherHandlerFromEndpoint(ctx, mux,  *grpcEndpoint, opts)
  if err != nil {
    return err
  }

  // Start HTTP server (and proxy calls to gRPC server endpoint)
  return http.ListenAndServe(":8081", mux)

}

func main() {
	flag.Parse()
	defer glog.Flush()

	if err := run(); err != nil {
		glog.Fatal(err)
	}
}
