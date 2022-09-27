import { AggregatorTypes } from '@manahippo/hippo-sdk';
import { FC, useMemo } from 'react';

import hippoLogo from 'resources/img/hippo-icon.svg';
import basiqLogo from 'resources/img/dexes/basiq.jpeg';
import econiaLogo from 'resources/img/dexes/econia.jpeg';
import pontemLogo from 'resources/img/dexes/pontem.jpeg';
import classNames from 'classnames';

interface IPoolProviderProps {
  dexType: AggregatorTypes.DexType;
  className?: string;
}

const PoolProvider: FC<IPoolProviderProps> = ({ dexType, className = '' }) => {
  const imgSrc = useMemo(() => {
    if (dexType === AggregatorTypes.DexType.Basiq) {
      return basiqLogo;
    } else if (dexType === AggregatorTypes.DexType.Econia) {
      return econiaLogo;
    } else if (dexType === AggregatorTypes.DexType.Hippo) {
      return hippoLogo;
    } else if (dexType === AggregatorTypes.DexType.Pontem) {
      return pontemLogo;
    } else {
      throw new Error('Invalid dex for pool provider');
    }
  }, [dexType]);
  return (
    <div className={classNames('flex items-center h-full', className)}>
      <img src={imgSrc} alt={'Dex logo'} className="w-6 h-6 rounded-full mr-2" />
      <span className="largeTextBold text-grey-700">{AggregatorTypes.DexType[dexType]}</span>
    </div>
  );
};

export default PoolProvider;