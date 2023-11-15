import { toast } from "react-toastify";
import moment from "moment";

export const createUserNotification = () =>
  toast.success("Player Created", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const addUserToTeamNotification = (firstName, teamName) =>
  toast.success(`${firstName} Successfully Added To Team ${teamName}`, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const failedAddUserToTeamNotification = (firstName, teamName) =>
  toast.error(
    `Failed To Add ${firstName} To Team ${teamName}. ${firstName} Is Already On The Roster For ${teamName}`,
    {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );

export const addGameNotification = () =>
  toast.success(`Game Successfully Created`, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const failedAddGameNotification = () =>
  toast.error(`This Game Is Already In The Schedule`, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const addTeamNotification = (teamName) =>
  toast.success(`Team ${teamName} Successfully Created`, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const updateGameNotification = () =>
  toast.success(`Game Successfully Updated`, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const failedCreateTeamNotification = (teamName) =>
  toast.success(`Failed To Create Team`, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export function convertMilitaryTime(time) {
  let result;
  const hour = time.split(":");
  const newHour = Number(hour[0]) - 12;

  if (Number(hour[0]) > 12) {
    result = `${newHour}:${hour[1]} pm`;
  } else if (Number(hour[0]) === 12) {
    result = `${hour[0]}:${hour[1]} pm`;
  } else {
    result = `${hour[0]}:${hour[1]} am`;
  }

  return result;
}

export function convertDay(date) {
  // Convert string to Date object
  const result = moment(date).format("ddd, MMM Do");
  return result.slice(0, result.length - 2);
}

export function gameCount(teams) {
  const result = [];
  for (const team of teams) {
    for (const game of team.Team.Games) {
      result.push(game);
    }
  }
  return result.length;
}
