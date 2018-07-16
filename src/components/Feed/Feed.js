import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { getLatestMeals } from '../../actions/getLastetMeals';
import FeedCard from './FeedCard';

export class Feed extends React.Component {
  static navigationOptions = {
    title: 'Latest Meals',
    headerTintColor: '#9C201D',
    headerStyle: {
      backgroundColor: '#Eee6d7',
    },
  };

  componentDidMount() {
    this.props.getLatestMeals();
  }

  handleLayout = e => {
    this.setState({
      scrollViewWidth: e.nativeEvent.layout.width,
      scrollViewHeight: e.nativeEvent.layout.height
    });
  }
  render() {
    const { latestMealsList } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {latestMealsList.map((meal) => (
            <FeedCard
              category={meal.strCategory}
              image={meal.strMealThumb}
              key={meal.idMeal}
              title={meal.strMeal}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#9C201D',
    alignItems: 'flex-start',
  }
});

const mapStateToProps = (state) => {
  const { hasError, latestMealsList } = state.latestMeals;
  return {
    hasError,
    latestMealsList
  };
};

const mapDispatchToProps = {
  getLatestMeals
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
