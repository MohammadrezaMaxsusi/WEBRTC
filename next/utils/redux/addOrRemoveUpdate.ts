// @ts-nocheck
export const planDetailAddOrRemoveUpdate = (planDetails, item) => {
  if (!item) {
    return {};
  }

  const {
    moderatorUserId,
    moduleGroupIds,
    planDetailInfoId,
    planDetailName,
    planDetailTypeId,
    planHeaderId,
    planDetailInfo,
  } = item;

  try {
    const info = JSON.parse(planDetailInfo)[0];
    const newItem = {
      dayOfWeek: info.dayOfWeek,
      duration: info.duration,
      events: "",
      hasRollCall: info.hasRollCall,
      moderatorName: !moderatorUserId ? "Admin" : "",
      moderatorUserID: moderatorUserId,
      moduleGroupIDs: moduleGroupIds,
      online: info.isOnline,
      order: info.order,
      period: info.period,
      planDetailID: parseInt(planHeaderId),
      planDetailInfoID: planDetailInfoId ? parseInt(planDetailInfoId) : null,
      planDetailName: planDetailName,
      planDetailTypeID: parseInt(planDetailTypeId),
      startTime: info.startTime,
    };

    const finalItems = planDetails.filter(
      (detail) => detail.planDetailInfoID !== newItem.planDetailInfoID
    );
    const oldItem = planDetails.filter(
      (detail) => detail.planDetailInfoID === newItem.planDetailInfoID
    );
    return finalItems.concat({ ...oldItem, ...newItem });
  } catch (e) {
    return planDetails;
  }
};

export const planCalendarRemoveOnCancel = (items, planCalendarCancelId) => {
  return items.filter((item) => item.planCalendarId !== planCalendarCancelId);
};
