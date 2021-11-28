import { memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo(
  ({ title, disabled = false, loading = false, onClick }) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        isLoading={loading}
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </Button>
    );
  }
);
