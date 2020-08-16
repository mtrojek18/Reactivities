import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { RootStoreContext } from "../../../app/stores/rootStore";

const ActivityDashboard: React.FC = ({}) => {
  const rootStore = useContext(RootStoreContext);
  const { loadActivities, loadingInitial } = rootStore.activityStore;

  // 2md array -> dependency array -> prevents useEffect from looping constantly
  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  if (loadingInitial)
    return <LoadingComponent content="Loading activities..." />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
