import { FC, useContext, createContext } from "react";
import { useState } from "react";

type ABC = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};
const createAppBarCtx = () => {
  const ctx = createContext<ABC>({
    isOpen: false,
    close: () => {},
    open: () => {},
  });
  ctx.displayName = "AppBarContext";
  return ctx;
};

export const ctx = createAppBarCtx();

export const Provider: FC = (props) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const Provider = ctx.Provider;
  return <Provider {...(props as any)} value={{ open, isOpen, close }} />;
};

export const useAppBar = () => useContext(ctx);
