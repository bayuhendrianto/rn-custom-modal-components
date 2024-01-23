import { ReactNode } from "react";

export type CustomAlertProps = {
  isTitle?: boolean;
  visible: boolean;
  onVisible: any;
  onConfirm: () => void;
  title?: string;
  titleColor?: string;
  titlePosition?: "center" | "auto" | "left" | "right" | "justify";
  message: string | ReactNode;
  messageColor?: string;
  actionText?: string;
  backgroundColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
};

export type CustomDialogProps = {
  isTitle?: boolean;
  visible: boolean;
  onVisible: any;
  onConfirm: () => void;
  title?: string;
  titleColor?: string;
  titlePosition?: "center" | "auto" | "left" | "right" | "justify";
  titleFontSize?: number;
  message: string | ReactNode;
  messageColor?: string;
  messageFontSize?: number;
  actionCancelText?: string;
  actionConfirmText?: string;
  backgroundColor?: string;
  buttonCancelColor?: string;
  buttonTextCancelColor?: string;
  buttonConfirmColor?: string;
  buttonTextConfirmColor?: string;
};

export type CustomDialogInputProps = {
  isTitle?: boolean;
  isMessage?: boolean;
  visible: boolean;
  onVisible: any;
  onConfirm: () => void;
  title?: string;
  titleColor?: string;
  titleFontSize?: number;
  titlePosition?: "center" | "auto" | "left" | "right" | "justify";
  message?: string | ReactNode;
  messageColor?: string;
  messageFontSize?: number;
  messagePosition?: "center" | "auto" | "left" | "right" | "justify";
  actionCancelText?: string;
  actionConfirmText?: string;
  backgroundColor?: string;
  buttonCancelColor?: string;
  buttonTextCancelColor?: string;
  buttonConfirmColor?: string;
  buttonTextConfirmColor?: string;
  children: ReactNode;
};
