import Question from './Question';
import CheckButton from './CheckButton';
import RegisterButton from './RegisterButton';
import AllTabs from '../tabs/AllTabs';
import Songs from '../songs/Songs';

import { Box, Center, Flex } from '@chakra-ui/react';
import { useState } from 'react';

function Options({
  account,
  accountFormatted,
  signer,
  title,
  lyrics,
  lyricsByLine,
  isSubmitted,
  isEncrypted,
  songSignature,
  isChecked,
  isDeposited,
  depositReceipt,
  isRegistered,
  registerReceipt,
  isListed,
  songList,
  setTitle,
  setLyrics,
  setLyricsByLine,
  setIsSubmitted,
  setIsEncrypted,
  setSongSignature,
  setIsChecked,
  setIsDeposited,
  setDepositReceipt,
  setIsRegistered,
  setRegisterReceipt,
  setIsListed,
  setSongList,
}) {
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const [isRegisterButtonClicked, setIsRegisterButtonClicked] = useState(false);

  const REGISTER_ADDRESS = '0x380abCe4Dfe7b35a365857c380f18A2119675dd9';
  const REGISTER_ABI = [
    { inputs: [{ internalType: 'uint256', name: '_cost', type: 'uint256' }], stateMutability: 'nonpayable', type: 'constructor' },
    { inputs: [], name: 'NoBalance', type: 'error' },
    { inputs: [], name: 'NoFunds', type: 'error' },
    { inputs: [], name: 'NotOwner', type: 'error' },
    { inputs: [], name: 'Paused', type: 'error' },
    { inputs: [], name: 'Unpaused', type: 'error' },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: '_account', type: 'address' },
        { indexed: false, internalType: 'uint256', name: '_deposit', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: '_balance', type: 'uint256' },
      ],
      name: 'Deposited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: '_writer', type: 'address' },
        { indexed: false, internalType: 'string', name: '_hash', type: 'string' },
      ],
      name: 'Registered',
      type: 'event',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'balances',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    { inputs: [], name: 'cost', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'deposit', outputs: [], stateMutability: 'payable', type: 'function' },
    {
      inputs: [{ internalType: 'address', name: '_songwriter', type: 'address' }],
      name: 'getSongs',
      outputs: [{ internalType: 'string[]', name: '', type: 'string[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    { inputs: [], name: 'isPaused', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'owner', outputs: [{ internalType: 'address payable', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { inputs: [{ internalType: 'string', name: '_songHash', type: 'string' }], name: 'register', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { inputs: [], name: 'withdraw', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  ];
  return (
    <Box mt={20}>
      <Center>
        <Flex alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
          <Question />

          <RegisterButton setIsCheckButtonClicked={setIsCheckButtonClicked} setIsRegisterButtonClicked={setIsRegisterButtonClicked} />
          <CheckButton setIsCheckButtonClicked={setIsCheckButtonClicked} setIsRegisterButtonClicked={setIsRegisterButtonClicked} />

          {isRegisterButtonClicked ? (
            <AllTabs
              account={account}
              accountFormatted={accountFormatted}
              signer={signer}
              contractAddress={REGISTER_ADDRESS}
              contractABI={REGISTER_ABI}
              title={title}
              lyrics={lyrics}
              lyricsByLine={lyricsByLine}
              isSubmitted={isSubmitted}
              isEncrypted={isEncrypted}
              songSignature={songSignature}
              isChecked={isChecked}
              isDeposited={isDeposited}
              depositReceipt={depositReceipt}
              isRegistered={isRegistered}
              registerReceipt={registerReceipt}
              setTitle={setTitle}
              setLyrics={setLyrics}
              setLyricsByLine={setLyricsByLine}
              setIsSubmitted={setIsSubmitted}
              setIsEncrypted={setIsEncrypted}
              setSongSignature={setSongSignature}
              setIsChecked={setIsChecked}
              setIsDeposited={setIsDeposited}
              setDepositReceipt={setDepositReceipt}
              setIsRegistered={setIsRegistered}
              setRegisterReceipt={setRegisterReceipt}
            />
          ) : isCheckButtonClicked ? (
            <Songs
              account={account}
              signer={signer}
              contractAddress={REGISTER_ADDRESS}
              contractABI={REGISTER_ABI}
              isListed={isListed}
              isRegistered={isRegistered}
              songList={songList}
              setIsListed={setIsListed}
              setSongList={setSongList}
            />
          ) : null}
        </Flex>
      </Center>
    </Box>
  );
}

export default Options;
