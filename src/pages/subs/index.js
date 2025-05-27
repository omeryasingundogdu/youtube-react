import React from 'react';
import { useParams } from 'react-router-dom';
import ChannelPage from './ChannelPage';

function SubsPage() {
  const { channelId } = useParams();
  

  return <ChannelPage channelId={channelId || 'sweenwh'} />;
}

export default SubsPage; 