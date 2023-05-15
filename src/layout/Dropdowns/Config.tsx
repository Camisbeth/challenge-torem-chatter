import { useState } from 'react';
import ConfirmDialog from '../../components/ConfirmDialog';
import NewChatModal from '../../components/HomeChat/NewChatModal';
import { DropDownProps } from '../../types/chat';
import apiClient from '../../utils/client';
import { useAppDispatch } from '../../redux/hooks';
import { setLogoutData } from '../../redux/userSlice';
import { useRouter } from 'next/dist/client/router';
import { NotificationSuccess } from '../../components/Notifications';
import { deleteJWT } from '../../utils/handleJWT';

function ConfigDropdown(dropDownProps: DropDownProps) {
  const { getChatsData, userData, isOpen } = dropDownProps;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [delDialogIsOpen, setDelDialogIsOpen] = useState(false);
  const [newChatModalIsOpen, setNewChatModalIsOpen] = useState(false);

  const handleDeleteUser = () => {
    setDelDialogIsOpen(true);
  };

  const handleNewChatModal = () => {
    setNewChatModalIsOpen(true);
  };

  const handleConfirmDelete = async () => {
    /* 
      ✔TODO: 
      1. Get current user data 
      2. Delete user 
    */

    try {
      await apiClient.delete('/users', {
        headers: { Authorization: `Bearer ${userData.authToken}` }
      });
      dispatch(setLogoutData());
      deleteJWT();
      router.push('/');
      NotificationSuccess('Eliminaste tu cuenta con éxito.');
    } catch (error) {}
  };

  return (
    <div className={isOpen ? 'configDropdown scale1' : 'configDropdown'}>
      <ul>
        <li onClick={handleNewChatModal}>
          <div>Nuevo chat</div>
        </li>
        <li onClick={handleDeleteUser}>
          <div>Eliminar cuenta</div>
        </li>
      </ul>

      <NewChatModal
        isOpen={newChatModalIsOpen}
        setIsOpen={setNewChatModalIsOpen}
        userData={userData}
        getChatsData={getChatsData}
      />
      <ConfirmDialog
        title="Eliminar Usuario"
        text="¿Está seguro que desea eliminar la cuenta?"
        isOpen={delDialogIsOpen}
        handleCancel={setDelDialogIsOpen}
        handleOk={handleConfirmDelete}
      />
    </div>
  );
}

export default ConfigDropdown;
