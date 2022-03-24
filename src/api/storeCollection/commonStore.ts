import { makeAutoObservable } from "mobx";
import { ServerError } from "../models/serverError";

export class CommonStore {
  token: string | null = window.localStorage.getItem("jwt");
  userId: string | null = window.localStorage.getItem("userId");
  roles: string | null = window.localStorage.getItem("roles");
  serverError: ServerError | null = null;
  error: string | null = null;
  loading = false;
  isThereError = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (value: boolean) => (this.loading = value);

  setIsThereError = (value: boolean) => (this.isThereError = value);

  setError = async (message: string | null) => {
    if (message) {
      this.setIsThereError(true);
    }
    this.error = message;

    setTimeout(() => {
      this.setIsThereError(false);
    }, 8000);
  };

  setToken = (token: string | null) => {
    this.token = token;
  };

  setUserId = (userId: string | null) => {
    this.userId = userId;
  };

  setRoles = (roles: string[]) => {
    const userRole = roles.join(",");
    this.roles = userRole;
  };

  setServerError = (error: ServerError) => {
    this.serverError = error;
  };
}
