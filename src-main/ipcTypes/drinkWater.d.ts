import { CycleFeatureInfo, NotificationInfo } from "./global";

export interface DrinkWaterInfo extends CycleFeatureInfo {
  /**
   * The time in minutes of each lap.
   */
  lapDuration: number;

  /**
   * Configuration about the notification of end of each cycle.
   */
  notification: NotificationInfo;
}

export interface DrinkWaterActionMap {
  // methods
  getInfo(): DrinkWaterInfo;
  setInfo(info: DrinkWaterInfo): void;
  start(): void;
  pause(): void;

  // events
  onChange(info: DrinkWaterInfo): void;
}