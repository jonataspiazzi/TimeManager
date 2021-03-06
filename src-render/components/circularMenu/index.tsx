import React, { useEffect, useRef, useState } from 'react';
import { PomodoroInfo } from '../../../src-main/bridge/infos/pomodoro';
import { CircularMenuSvgHelper, elementButtons, CircularMenuButton } from '../../helpers/circularMenuSvgHelper';
import './index.scss';

export interface CircularMenuProps {
  pomodoro: PomodoroInfo;
  onClick: (button: CircularMenuButton) => void;
  onClose: () => void;
}

export default function CircularMenu(props: CircularMenuProps) {
  const [menu, setMenu] = useState(`<p>Loading</p>`);
  const [svgHelper] = useState<CircularMenuSvgHelper>(new CircularMenuSvgHelper());
  const [loaded, setLoaded] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);

  async function load() {
    const svg = await svgHelper.load();

    setMenu(svg);
    svgHelper.setElement(refDiv.current);
    setLoaded(true);

    for (const button of elementButtons) {
      svgHelper.getElement(button).addEventListener('click', () => props.onClick(button));
    }

    svgHelper.getElement('close-center').addEventListener('click', () => props.onClose());
    svgHelper.getElement('close-outfill').addEventListener('click', () => props.onClose());
  }

  useEffect(() => { load(); }, []);

  useEffect(() => {
    svgHelper.setPomodoroProgress(props.pomodoro.currentCycle, props.pomodoro.currentTime, props.pomodoro.currentCycleDuration);
  }, [props.pomodoro.currentCycle, props.pomodoro.currentTime, props.pomodoro.currentCycleDuration, svgHelper, loaded]);

  return (
    <div className="circular-menu" dangerouslySetInnerHTML={{ __html: menu }} ref={refDiv}>
    </div>
  );
}
