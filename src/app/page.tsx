import React from "react";
import { Button, Text } from "@radix-ui/themes";
import { getThemeFromCookies } from "@/components/theme/theme";
import { cn } from "@/utils/generalUtils";
import Wave from "@/components/ui/Wave";

export default async function Home() {
  const theme = await getThemeFromCookies();
  return (
    <React.Fragment>
      <main className="relative flex flex-col flex-wrap justify-center items-center px-4 pt-28 w-full max-h-screen">
        <h1 className="font-semibold text-2xl text-center md:text-4xl poppins">
          Welcome to{" "}
          <Text color={theme.accentColor} className="font-normal">
            Binary Battle!
          </Text>
        </h1>
        <Text
          as="p"
          className={cn(
            "mt-4 text-center inter font-medium",
            theme.appearance === "dark" ? "text-gray-300" : "text-gray-700"
          )}
        >
          A simple relaxing puzzle game where you have to fill the grid with the
          appropriate contrasting elements!
          <br />
          <br />
          New to the game?{" "}
          <Text
            as="span"
            role="button"
            color={theme.accentColor}
            className={"inter font-medium"}
          >
            Learn how to play
          </Text>
        </Text>
        <div className="flex justify-center mt-12 w-full">
          <Button className="!p-6 !rounded-lg font-semibold !text-lg poppins">
            Start Game
          </Button>
        </div>
        <div className="bottom-0 fixed w-full">
          <Wave color={theme.appearance === "dark" ? "#212427" : "#c8c8c9"} />
        </div>
      </main>
    </React.Fragment>
  );
}
