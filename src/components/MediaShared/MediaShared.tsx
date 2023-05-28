import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React from "react";

interface MediaSharedProps {
  url: string;
}

const MediaShared = ({ url }: MediaSharedProps): JSX.Element => {
  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      &nbsp;
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      &nbsp;
      <TelegramShareButton url={url}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      &nbsp;
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default MediaShared;
