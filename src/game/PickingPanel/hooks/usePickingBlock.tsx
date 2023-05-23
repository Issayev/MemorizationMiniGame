import {
  useContext,
  useEffect,
  useRef,
} from "react";
import type { WithPickingPanelContextArgs } from "./types";
import { GameContext } from "../../GameContext/context";
import { GameStage } from "../../GameContext/types";

export function usePickingBlock({
  pickingPanelContext,
}: WithPickingPanelContextArgs) {
  const { gameStatusRef } =
    useContext(GameContext);

  const isPickingBlockedRef = useRef<boolean>(
    gameStatusRef.current.stage !==
      GameStage.REPRODUCTION
  );

  useEffect(() => {
    const blockPicking = () => {
      isPickingBlockedRef.current = true;
    };

    const unblockPicking = () => {
      isPickingBlockedRef.current = false;
    };

    pickingPanelContext.isPickingBlockedRef =
      isPickingBlockedRef;
    pickingPanelContext.blockPicking =
      blockPicking;
    pickingPanelContext.unblockPicking =
      unblockPicking;
  }, []);
}
