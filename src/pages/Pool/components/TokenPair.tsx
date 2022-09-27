import CoinIcon from 'components/CoinIcon';
import useToken from 'hooks/useToken';
import { IPoolToken } from 'types/pool';

interface TProps {
  token0: IPoolToken;
  token1: IPoolToken;
}

const TokenPair: React.FC<TProps> = ({ token0, token1 }) => {
  const { retreiveTokenImg } = useToken();
  const [token0URI, token1URI] = retreiveTokenImg([token0, token1]);

  return (
    <div className="flex items-center gap-4 w-[240px] max-w-[240px]">
      <div className="flex flex-col gap-2 border-[5px] border-grey-900 p-1 rounded-full">
        <CoinIcon size={32} logoSrc={token0URI || ''} />
        <CoinIcon size={32} logoSrc={token1URI || ''} />
      </div>
      <div className="header4 bold">
        {token0.symbol}/{token1.symbol}
      </div>
    </div>
  );
};

export default TokenPair;
