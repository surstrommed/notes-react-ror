import { PropsWithChildren } from "react";
import { TQueryError } from "./common";

export type TQueryWrapper = PropsWithChildren<{
  isLoading: boolean;
  error?: TQueryError;
  data?: unknown;
}>;

export type TPagesWrapper = PropsWithChildren<{}>;
