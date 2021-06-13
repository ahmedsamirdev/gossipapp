import { Avatar, Button, Zoom, Tooltip, IconButton } from "@material-ui/core";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";
import { useRouter } from "next/router";
import { Circle } from "better-react-spinkit";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Sidebar() {
  let [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatSnapshot, loadingChats] = useCollection(userChatRef);

  const createChat = () => {
    if (!email) return null;

    if (
      EmailValidator.validate(email) &&
      !loading &&
      !chatAlreadyExists(email) &&
      email !== user.email
    ) {
      db.collection("chats").add({
        users: [user.email, email],
      });
    } else {
      alert("Please enter a valid email!");
    }
  };

  const chatAlreadyExists = (recipientEmail) =>
    !!chatSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );

  return (
    <Container>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block p-10 w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Enter your friend's gmail to create a chat
                </Dialog.Title>
                <div className="mt-1 w-9/12 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent focus:outline-none text-gray-600 p-2 rounded-lg w-80 bg-gray-100"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={closeModal}
                  >
                    Add
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => router.push("/")} />
        <IconsContainer>
          <IconButton onClick={openModal}>
            <Tooltip  TransitionComponent={Zoom} title="Add new chat">
              <ChatIcon  onClick={createChat} />
            </Tooltip>
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <Tooltip TransitionComponent={Zoom} title="Sign out">
            <IconButton onClick={() => auth.signOut()}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIco />
        <SearchInput placeholder="Search in chat" />
      </Search>

      {/* <SidebarButton onClick={createChat}>Start a new chat</SidebarButton> */}
      {loadingChats ? (
        <ChatLoading>
          <Circle color="#3C3C3C" size={30} />
        </ChatLoading>
      ) : (
        chatSnapshot?.docs.map((chat) => (
          <Chat
            key={chat.id}
            id={chat.id}
            users={chat.data().users}
            user={user}
          />
        ))
      )}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  @media (max-width: 768px) {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ChatLoading = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 9px;
  border-radius: 2px;
  border-bottom: 1px solid whitesmoke;
`;
const SearchIco = styled(SearchIcon)`
  margin-right: 10px;
`;
const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 20px;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
`;

const Header = styled.div`
  display: flex;
  background-color: whitesmoke;
  position: sticky;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
