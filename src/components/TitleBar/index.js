import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Actions, Title } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";

import face from "assets/images/face-male-3.jpg";
import { ReactComponent as Call } from "assets/icon/call.svg";
import { ReactComponent as Camera } from "assets/icon/camera.svg";
import { ReactComponent as Options } from "assets/icon/options.svg";
import { DropdownItem } from "components/Dropdown/style";
import Seperator from "components/Seperator";
import Dropdown from "components/Dropdown";

function TitleBar({ onAvatarClick, onVideoClicked, children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar onClick={onAvatarClick} status="offline" src={face} />
      <Title>
        <Paragraph size="large">歌德</Paragraph>
        <Paragraph type="secondary">
          <Text>手机在线-5G📱</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} onClick={onVideoClicked} />
        <Icon opacity={0.3} icon={Camera} />
        <Dropdown
          content={
            <>
              <DropdownItem>
                <Paragraph>个人资料</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph>关闭会话</Paragraph>
              </DropdownItem>
              <Seperator />
              <DropdownItem>
                <Paragraph type="danger">屏蔽此人</Paragraph>
              </DropdownItem>
            </>
          }
        >
          <Icon opacity={0.3} icon={Options} />
        </Dropdown>
      </Actions>

    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any
};

export default TitleBar;
