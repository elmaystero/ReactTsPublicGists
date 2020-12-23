interface ServiceInit {
    status: 'init';
  }
  interface ServiceLoading {
    status: 'loading';
  }
  interface ServiceLoaded<T> {
    payload: T;
  }
  interface ServiceError {
    status: 'error';
    error: Error;
  }
  export type Service<T> =
    ServiceLoaded<T>