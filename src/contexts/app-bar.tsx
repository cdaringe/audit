import { createContext, FC, useContext } from "react";
import { useState } from "react";

type ABC = {
  title: string;
  setTitle: (t: string) => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};
const createAppBarCtx = () => {
  const ctx = createContext<ABC>({
    title: "",
    setTitle: () => {},
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
  const [title, setTitle] = useState("");
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const Provider = ctx.Provider;
  return <Provider
    {...(props as any)}
    value={{ open, isOpen, close, title, setTitle }}
  />;
};

export const useAppBar = () => useContext(ctx);
