import React from "react";

export const Appointment = ({ customer }) => (
  <div>{customer.firstName}</div>
);

export const AppointmentsDayView = ({
  appointments,
}) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appt) => (
        <li key={appt.startsAt}>
          {getTime(appt.startsAt)}
        </li>
      ))}
    </ol>
    {appointments.length === 0 ? (
      <p>
        There are no appointments scheduled for today.
      </p>
    ) : (
      <Appointment {...appointments[0]} />
    )}
  </div>
);

const getTime = (startsAt) => {
  const [h, m] = new Date(startsAt)
    .toTimeString()
    .split(":");
  return `${h}:${m}`;
};
