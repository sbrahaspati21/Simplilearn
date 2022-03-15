export class LoggingService {
  logStatusChange(status: string) {
    console.log('An Account status changed, new status: ' + status);
  }
}
