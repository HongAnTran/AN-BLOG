import ErrorRespone  from "@/types/api"


export const HandlerToken = {
  getAccessToken() {
    return ""
  }
}

export function handelErorr(error: unknown) {
  let err: ErrorRespone = { status: 0, errors: []  , data : undefined}
  if (error instanceof ErrorRespone) {
    err = { ...error }
  } else if (error instanceof Error) {
    err.errors = [error.message]
  } else {
    err.errors = [JSON.stringify(error)]
  }
  return err
}