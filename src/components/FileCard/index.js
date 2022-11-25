import React from "react";
import PropTypes from "prop-types";
import StyledFileCard, {
  FileName,
  FileSize,
  Options,
  Time,
  FileIcon,
} from "./style";

import { ReactComponent as FileZip } from "assets/icon/fileZip.svg";
import { ReactComponent as FileExcel } from "assets/icon/fileExcel.svg";
import { ReactComponent as FileWord } from "assets/icon/fileWord.svg";
import { ReactComponent as FilePpt } from "assets/icon/filePpt.svg";
import { ReactComponent as FileImage } from "assets/icon/fileImage.svg";
import { ReactComponent as FilePdf } from "assets/icon/filePdf.svg";
import { ReactComponent as OptionsIcon } from "assets/icon/options.svg";
import Icon from "components/Icon";

const fileIcons = {
  zip: FileZip,
  image: FileImage,
  pdf: FilePdf,
  word: FileWord,
  excel: FileExcel,
  ppt: FilePpt,
};

function FileCard({ children, ...rest }) {
  return (
    <StyledFileCard {...rest}>
      <FileIcon icon={fileIcons.zip} />
      <FileName>Source Code.zip</FileName>
      <FileSize>1.5M</FileSize>
      <Options>
        <Icon icon={OptionsIcon} opacity={0.3} />
      </Options>
      <Time>2019年02月03日</Time>
    </StyledFileCard>
  );
}

FileCard.propTypes = {
  children: PropTypes.any,
};

export default FileCard;
