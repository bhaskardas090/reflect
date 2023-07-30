import React from 'react'
import styles from '../styles/Home.module.css'
import GreetingsNav from '../common/GreetingsNav/GreetingsNav'
import Quote from '../common/Quote/Quote'
import Navigation from '../common/Navigation/Navigation'
import Todo from '../common/Todo/Todo'
import { HomepageData } from '../data'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import useLogOut from '../hooks/useLogOut';

function Home() {
  const { user } = useAuthContext();
  const { logout } = useLogOut();

  const handleLogOut = async () => {
    logout();
  };

  return (
    <div className={styles.homeContainer}>
      <GreetingsNav />
      <Quote>
        <p>
          “You have to create little pockets of joy in your life to take care of
          yourself.”
        </p>
      </Quote>

      {/* <div className={styles.timePeriod}>
        <img src="/HomeAssets/morning.png" className={styles.timePeriodImg} />
        <h3 className={styles.timePeriodText}>Morning</h3>
      </div>

      {HomepageData?.map((data) => (
        <Todo img={data.img} title={data.task} />
      ))}
      <div className={styles.timePeriod}>
        <img src="/HomeAssets/afternoon.png" className={styles.timePeriodImg} />
        <h3 className={styles.timePeriodText}>Afternoon</h3>
      </div>
      <div className={styles.timePeriod}>
        <img src="/HomeAssets/night.png" className={styles.timePeriodImg} />
        <h3 className={styles.timePeriodText}>Night</h3>
      </div> */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        {user ? <h1>{user.email}</h1> : <h1>null</h1>}
        {user && (
          <Button
            variant="outlined"
            color="error"
            onClick={handleLogOut}
            style={{ margin: '1rem auto' }}
          >
            Log Out
          </Button>
        )}
      </div>
      <Navigation />
    </div>
  );
}

export default Home