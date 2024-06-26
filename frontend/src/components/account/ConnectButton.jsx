import { Box, Button, Center } from '@chakra-ui/react';

import { ethers } from 'ethers';
import { ErrorDecoder } from 'ethers-decode-error';
import { errorsMapper } from '../../utils/errorsMapper';
import { formatAddress } from '../../utils/formatter';

function ConnectButton({ account, contractABI, setAccount, setAccountFormatted, setSigner }) {
  const errorDecoder = ErrorDecoder.create([contractABI]);
  const getAccount = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);

      if (account !== accounts[0]) {
        const partialAccount = formatAddress(accounts[0]);
        const signer = await provider.getSigner(accounts[0])

        setAccount(accounts[0]);
        setAccountFormatted(partialAccount);
        setSigner(signer);
      }
    } catch (error) {
      const decodedError = await errorDecoder.decode(error);
      const reason = errorsMapper(decodedError);

      console.log(reason);
    }
  };

  return (
    <Box>
      <Center>
        <Button onClick={getAccount} bgColor="#22267b" color="#f2f2f2">
          Connect Your Account
        </Button>
      </Center>
    </Box>
  );
}

export default ConnectButton;
