import { NavigationComponent } from "../NavigationComponent";
import { getContextValues } from "../../utils/getContextValues";
import { WrapperHeaderNavigation } from "./styles";
export const HeaderNavigation = () => {
  const { userEmail, section, handleSetSection } = getContextValues();

  const handleClick = (value: "home" | "myPosts" | "create") => {
    if (value !== section) {
      handleSetSection(value);
    }
  };

  return (
    <WrapperHeaderNavigation>
      {section !== "edit" && (
        <>
          <NavigationComponent
            label="Home"
            handleClickNavigation={() => handleClick("home")}
            isSelected={section === "home"}
          />
          {userEmail && (
            <>
              <NavigationComponent
                label="My Posts"
                handleClickNavigation={() => handleClick("myPosts")}
                isSelected={section === "myPosts"}
              />
              <NavigationComponent
                label="Create Post"
                handleClickNavigation={() => handleClick("create")}
                isSelected={section === "create"}
              />
            </>
          )}
        </>
      )}
    </WrapperHeaderNavigation>
  );
};
