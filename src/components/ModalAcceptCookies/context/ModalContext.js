import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';


const ACCEPT_COOKIES_KEY = '__smarti9__acept_cookies';
const ModalContext = createContext(null);

export const ModalContextProvider = ({
  children,
}) => {
  const [accepCookies, setAcceptCookies] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const value = window.localStorage.getItem(ACCEPT_COOKIES_KEY);
    if (!value) {
      setShowModal(true);
      return;
    }

    const isAccepted = JSON.parse(value).accepted;
    setAcceptCookies(isAccepted);
  }, []);

  const handleAcceptCookies = (value) => {
    // todo , insert into localstorage
    window.localStorage.setItem(
      ACCEPT_COOKIES_KEY,
      JSON.stringify({ accepted: value }),
    );
    setAcceptCookies(value);
    setShowModal(false);
  };

  const ctxValue = useMemo(
    () => ({
      isAcceptedCookie: accepCookies,
      showModal,
      acceptCookies: handleAcceptCookies,
    }),
    [accepCookies, showModal],
  );

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => {
  const value = useContext(ModalContext);
  if (!value) {
    throw new Error('Cannot use this hook without inside ModalContextProvider');
  }
  return value;
};
