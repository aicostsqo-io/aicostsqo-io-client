import { useUIContext } from "../../../contexts/UI";
import { MODALS } from "../../../constants/modals";
import AddRP from "./AddRP";
import AddDiscontinuitiy from "./AddDiscontinuitiy";
import { useCallback } from "react";

export const MODAL_COMPONENTS = {
  [MODALS.ADD_RP]: AddRP,
  [MODALS.ADD_DISCONTINUITIES]: AddDiscontinuitiy,
};

const Modals = () => {
  const { activeModal, setActiveModal } = useUIContext();

  const Modal: React.FC<any> = MODAL_COMPONENTS[activeModal];

  const handleClose = useCallback(() => setActiveModal(""), []);

  if (!Modal) return null;

  return <Modal onClose={handleClose} />;

  /*  return createPortal(
        <Modal onClose={handleClose} {...payload} />,
        document.getElementById('modal-root')
      ); */
};

export default Modals;
