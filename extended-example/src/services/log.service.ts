export interface ILog {
    info: (message: any) => void;
    error: (message: any) => void;
}

type LogServiceType = (scope: string) => ILog;

export default LogServiceType;

export function LogService(scope: string): ILog {
    const logService =  {
        info: (message: any) => console.log(scope, message),
        error: (message: any) => console.error(scope, message)
    };

    Object.freeze(logService);

    return logService;
}



