import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import { ReactComponent as Plus } from "assets/icon/plus.svg";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Icon from "components/Icon";
import Input from "components/Input";
import MessageCard from "components/MessageCard";

import face1 from "assets/images/face-male-1.jpg";
import face2 from "assets/images/face-male-2.jpg";
import face4 from "assets/images/face-male-4.jpg";
import FilterList from "components/FilterList";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <FilterList options={["最新消息优先", "在线好友优先"]} actionLabel="创建会话">
        <ChatList>
          <MessageCard key={1} active replied avatarSrc={face1} name="尼采"
            avatarStatus="online" statusText="在线" time="1 分钟前"
            message="上帝已死" />
          <MessageCard key={2} avatarSrc={face2} name="黑格尔"
            avatarStatus="online" statusText="在线" time="2 小时前"
            message="存在的即是合理的" unreadCount={2} />
          <MessageCard key={3} replied avatarSrc={face4} name="纪伯伦"
            avatarStatus="online" statusText="在线" time="3 天前"
            message="不要因为走得太远而忘记为什么出发" />
        </ChatList>
      </FilterList>
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
