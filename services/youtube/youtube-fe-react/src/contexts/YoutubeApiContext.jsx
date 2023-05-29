import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';
import LocalYoutubeClient from '../api/localYoutubeClient';
export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const client = new LocalYoutubeClient();
  // const client = new YoutubeClient();
  const youtube = new Youtube(client);
  return (
    <YoutubeApiContext.Provider value={youtube}>
      {children}
    </YoutubeApiContext.Provider>
  )
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);;
}