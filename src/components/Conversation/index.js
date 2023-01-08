import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";

function Conversation({ onAvatarClick, onVideoClicked, children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar onAvatarClick={onAvatarClick} onVideoClicked={onVideoClicked} />
      <Conversations>
        <ChatBubble time="昨天 下午1:30">
          <VoiceMessage time="00:13" />
        </ChatBubble>
        <ChatBubble time="上午9:42">那些没能杀死我的，使我更坚强。</ChatBubble>
        <ChatBubble time="上午11:38">每个不曾起舞的日子，都是对生命的辜负。</ChatBubble>
        <MyChatBubble time="下午4:00">阳光强烈的地方，阴影深邃。
          <Emoji label="smile">😈</Emoji>
        </MyChatBubble>
        <ChatBubble time="下午4:22">上帝已死</ChatBubble>
      </Conversations>
      <Footer />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any
};

export default Conversation;
