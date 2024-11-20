declare module 'react-calendly' {
  interface PageSettings {
    backgroundColor?: string;
    hideEventTypeDetails?: boolean;
    hideLandingPageDetails?: boolean;
    primaryColor?: string;
    textColor?: string;
    [key: string]: any;
  }

  interface PrefillDetails {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    [key: string]: any;
  }

  interface PopupWidgetProps {
    url: string;
    rootElement: HTMLElement;
    text: string;
    textColor?: string;
    color?: string;
    pageSettings?: PageSettings;
    prefill?: PrefillDetails;
    onModalClose?: () => void;
    [key: string]: any;
  }

  interface InlineWidgetProps {
    url: string;
    styles?: {
      height?: string | number;
      width?: string | number;
      [key: string]: any;
    };
    prefill?: PrefillDetails;
    pageSettings?: PageSettings;
    [key: string]: any;
  }

  export const PopupWidget: React.FC<PopupWidgetProps>;
  export const InlineWidget: React.FC<InlineWidgetProps>;
}