import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo(({ onOpen }) => {
  return (
    <IconButton
      aria-label="メニューボタン　"
      icon={<HamburgerIcon />}
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
