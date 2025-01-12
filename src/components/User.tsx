/* eslint-disable quotes */
/* eslint-disable @next/next/no-img-element */
import { blackA, violet } from "@radix-ui/colors";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { useRecoilValue } from "recoil";
import { userInfoState } from "src/components/atoms";
import { UserInfo } from "src/components/UserInfo";
import { keyframes, styled } from "src/utils";

export const User = () => {
  const userInfo = useRecoilValue(userInfoState);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton aria-label="Update dimensions">
          <img className="rounded-full" src={userInfo.image} width={80} height={80} alt="superhero" />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent sideOffset={5}>
        <UserInfo />
        <Footer>
          <PopoverClose aria-label="Close">
            <LogOut>Log Out</LogOut>
          </PopoverClose>
          <DivSave>
            <Leave>Leave</Leave>
          </DivSave>
        </Footer>
      </PopoverContent>
    </Popover>
  );
};

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(PopoverPrimitive.Content, {
  height: "360px",
  width: "320px",
  borderRadius: 4,
  backgroundColor: "#ffffff",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
  },
});

const StyledClose = styled(PopoverPrimitive.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
});

const DivSave = styled(PopoverPrimitive.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: "white",
});

// Exports
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledContent;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;

// Your app...
const Flex = styled("div", { display: "flex" });

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 40,
  width: 40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
});

const Footer = styled("div", {
  display: "flex",
  gap: "50px",
  height: "30%",
  justifyContent: "center",
});

const Leave = styled("button", {
  color: "white",
  width: "80px",
  height: "40px",
  backgroundColor: "#5f95fa",
  borderRadius: "20px",
  cursor: "pointer",
  borderBottom: "2px solid #1904b8",
  "&:hover": {
    backgroundColor: "#3844f2",
  },
});

const LogOut = styled("button", {
  width: "80px",
  height: "40px",
  border: "black, 1px",
  backgroundColor: "#ebebeb",
  borderRadius: "20px",
  cursor: "pointer",
  borderBottom: "2px solid",
  "&:hover": {
    backgroundColor: "#e3e3e3",
  },
});
