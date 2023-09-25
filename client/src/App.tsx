import { BrowserRouter } from "react-router-dom";
import { ROUTES } from "./consts";
import { Router } from "./components/Router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={ROUTES.main}>
        <SnackbarProvider preventDuplicate>
          <Router />
        </SnackbarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
