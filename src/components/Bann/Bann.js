import { React, useState, useEffect } from 'react';
import getToken from 'utils/getToken';
import Modal from './Modal';
import BannBox from './BannBox';
import './Bann.scss';

const Bann = () => {
  const [input, setInput] = useState('');
  const [tempId, setTempId] = useState('');
  const [bannCadet, setBannCadet] = useState([]);
  const [bannModal, setBannModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [token, setToken] = useState();

  useEffect(() => {
    const fetchFunction = async () => {
      const response = await getToken();
      setToken(response.access_token);
    };
    fetchFunction();
  }, []);

  const handleChangeInput = e => {
    if (!bannModal) {
      setInput(e.currentTarget.value.replace(/[^A-Za-z]/gi, '')); // 영어만 입력되게끔
    }
  };

  const handleFindCadet = e => {
    e.preventDefault();
    if (!bannModal && input) {
      setBannModal(true);
      setTempId(input);
      setInput('');
    }
  };

  const handleCloseModal = type => {
    if (type === 'bann') {
      setBannModal(false);
    } else {
      setCancelModal(false);
    }
  };

  const handleCancelBann = e => {
    setCancelModal(true);
    setTempId(e.target.value);
  };

  return (
    <div className="bann-container">
      <div className="bann-box">
        <text className="title">차단 목록</text>
        <BannBox
          key="bannbox"
          onChangeInput={handleChangeInput}
          onFindCadet={handleFindCadet}
          onCancelBann={handleCancelBann}
          input={input}
          bannedCadets={bannCadet}
        />
      </div>
      {bannModal && (
        <Modal
          key="modal"
          onClose={() => handleCloseModal('bann')}
          id={tempId}
          setBann={setBannCadet}
          bannList={bannCadet}
          message="님을 차단하시겠습니까?"
          type="bann"
          token={token}
        />
      )}
      {cancelModal && (
        <Modal
          key="modal"
          onClose={() => handleCloseModal('cancel')}
          id={tempId}
          setBann={setBannCadet}
          bannList={bannCadet}
          message="님을 차단해제하시겠습니까?"
          type="cancel"
        />
      )}
    </div>
  );
};

export default Bann;
