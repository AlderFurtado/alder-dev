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
  quote: string;
}

const MediaShared = ({ url, quote }: MediaSharedProps): JSX.Element => {
  return (
    <div>
      <FacebookShareButton url={url} quote={quote}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      &nbsp;
      <WhatsappShareButton url={url} title={quote} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      &nbsp;
      <TelegramShareButton
        url={"https://github.com/next-share"}
        title={"next-share is a social share buttons plugin for React apps."}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      &nbsp;
      <TwitterShareButton url={url} title={quote}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default MediaShared;
