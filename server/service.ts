import { createServer } from "nice-grpc";
const { spawn } = require('child_process');
import { DeepPartial, HaberdasherDefinition, HaberdasherServiceImplementation, Hat, Size } from "../proto/build/ts/service/api/service"

const MakeHat  = (request : Size) : DeepPartial<Hat> => {
        const hat: Hat = {
            inches: request.inches,
            color: "red",
            name: "hat",
        };
        return hat;
    
}

export class haberdasherService implements HaberdasherServiceImplementation {
    async makeHat(request: Size): Promise<DeepPartial<Hat>> {
        return MakeHat(request);
    }
}

const server = createServer()
server.add(HaberdasherDefinition, new haberdasherService())
server.listen("localhost:50051")
spawn('./restgateway');
