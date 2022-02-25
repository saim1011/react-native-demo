/*
 * Copyright (c) 2011-2022, Zingaya, Inc. All rights reserved.
 */

import {IParticipant} from '../../../Utils/types';
import {conferenceActions} from './actionTypes';

export const toggleMute = () => ({
  type: conferenceActions.TOGGLE_MUTE,
});

export const toggleSendVideo = () => ({
  type: conferenceActions.TOGGLE_SEND_VIDEO,
});

export const changeCallState = (payload: string) => ({
  type: conferenceActions.CHANGE_CALL_STATE,
  payload,
});

export const setError = (payload: any) => ({
  type: conferenceActions.SET_ERROR,
  payload,
});

export const addParticipant = (payload: any) => ({
  type: conferenceActions.ADD_PARTICIPANT,
  payload,
});

export const localVideoStreamAdded = (payload: any) => ({
  type: conferenceActions.LOCAL_VIDEO_STREAM_ADDED,
  payload,
});

export const localVideoStreamRemoved = (payload: any) => ({
  type: conferenceActions.LOCAL_VIDEO_STREAM_REMOVED,
  payload,
});

export const endpointAdded = (payload: any) => ({
  type: conferenceActions.ENDPOINT_ADDED,
  payload,
});

export const removeVideoStreamAdded = (payload: any) => ({
  type: conferenceActions.REMOTE_VIDEO_STREAM_ADDED,
  payload,
});

export const removeVideoStreamRemoved = (payload: any) => ({
  type: conferenceActions.REMOTE_VIDEO_STREAM_REMOVED,
  payload,
});

export const endpointRemoved = (payload: any) => ({
  type: conferenceActions.ENDPOINT_REMOVED,
  payload,
});

export const removeAllParticipants = () => ({
  type: conferenceActions.REMOVE_ALL_PARTICIPANTS,
});

export const endpointVoiceActivityStarted = (payload: IParticipant) => ({
  type: conferenceActions.ENDPOINT_VOICE_ACTIVITY_STARTED,
  payload,
});

export const endpointVoiceActivityStopped = (payload: IParticipant) => ({
  type: conferenceActions.ENDPOINT_VOICE_ACTIVITY_STOPPED,
  payload,
});

export const endpointMuted = (payload: IParticipant) => ({
  type: conferenceActions.ENDPOINT_MUTED,
  payload,
});
