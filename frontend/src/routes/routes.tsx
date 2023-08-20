import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login.page";
import { PrivateRoute } from "./private.route";
import { UserAuthContextProvider } from "../context/auth.context";
import { AuthLayout } from "../components/layouts/auth.layout";
import {
  AuthContactPage,
  AuthGalleriesPage,
  AuthSubscriptionPage,
} from "../pages/auth";
import { RegisterPage } from "../pages/register.page";
import { MessageDetailsPage } from "../pages/message-details/message-details";
import { HomeMVPpage } from "../pages";
import { GalleriesDetailsPage } from "../pages/galleries-details/galleries-details";

export const BaseRoutes: FC = () => {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMVPpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/auth" element={<PrivateRoute />}>
            <Route element={<AuthLayout />}>
              <Route path="messages" element={<AuthContactPage />} />
              <Route path="messages/:id" element={<MessageDetailsPage />} />
              <Route path="galleries" element={<AuthGalleriesPage />} />
              <Route path="galleries/:id" element={<GalleriesDetailsPage />} />
              <Route path="plans" element={<AuthSubscriptionPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
};
