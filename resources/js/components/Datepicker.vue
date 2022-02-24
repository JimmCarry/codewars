<template>
    <div class="datepicker">
        <div @click="datepickerPanelActive = !datepickerPanelActive" class="close-button"><i class="fas fa-times"></i></div>

      <div class="schedule">
        vajci vajci
        <ul>
          <li class="controller">
              <h3>season</h3>
              <transition
                :name="dir"
              >
                <div class="controller-text" :key="AllSeasons[currentYear].yearFrom">{{ AllSeasons[currentYear].yearFrom }} - {{ AllSeasons[currentYear].yearTo.substring(2.4) }}</div>
              </transition>
              <i @click.prevent="currentYear++, dir = 'right'" :class="{disabled: AllSeasons[currentYear].yearFrom == '2019'}" class="fas fa-arrow-left left"></i>
              <i @click.prevent="currentYear--, dir = 'left'" :class="{disabled: AllSeasons[currentYear].yearFrom == '2021'}" class="fas fa-arrow-right right"></i>            
          </li>

          <li class="controller">
              <h3>week</h3>
              <transition
                :name="dir"
              >
                <div class="controller-text" :key="AllSeasons[currentYear].weeks[currentWeek].name">{{ AllSeasons[currentYear].weeks[currentWeek].name }}</div>
              </transition>
              <i @click="beforeDay" @click.prevent="currentWeek--, dir = 'right'" :class="{disabled: AllSeasons[currentYear].weeks[currentWeek].name == '1'}" class="fas fa-arrow-left left"></i>
              <i @click="nextDay" @click.prevent="currentWeek++, dir = 'left'" :class="{disabled: AllSeasons[currentYear].weeks[currentWeek].name == '2'}" class="fas fa-arrow-right right"></i>
          </li>

          <li class="controller">
            <h3>date</h3>
              {{ nameOfDay[chosenPlayingDay.getDay()] }}
              <i @click="beforeDay" class="fas fa-arrow-left left"></i>
              <i @click="nextDay" class="fas fa-arrow-right right"></i>
          </li>
        </ul>
        
      </div>
    </div>
</template>

<script>

import { ref, computed, inject } from 'vue'
import { scheduleAll } from '../../assets/data/schedule'
//import { teams } from '../../assets/data/teams'

//import TeamLogo from '../components/TeamLogo.vue'
//import Datepicker from '../components/Datepicker.vue'

import gsap from 'gsap'

export default {
  components: {
    //TeamLogo,
    //Datepicker
  },
  setup (props) {
    //console.log(props.match)
    const datepickerPanelActive = inject('datepickerPanelActive')
    const chosenPlayingDay = inject('chosenPlayingDay')
    // const beforeDay = inject('beforeDay')
    // const nextDay = inject('nextDay')

    const nameOfDay = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    const nameOfMonth = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
    // const currentDay = inject('currentDay')
    // const currentMonth = inject('currentMonth')
    // const currentDate = inject('currentDate')
    const beforeDay = () => {
      console.log('vajci')
      //console.log(chosenPlayingDay.value.setDate(chosenPlayingDay.value.getDate() - 1), chosenPlayingDay.value.getDate())
      chosenPlayingDay.value = new Date(chosenPlayingDay.value.setDate(chosenPlayingDay.value.getDate() - 1))
    }

    const nextDay = () => {
      console.log('vajci')
      chosenPlayingDay.value = new Date(chosenPlayingDay.value.setDate(chosenPlayingDay.value.getDate() + 1))
    }




    const currentWeek = ref(0)
    const currentYear = ref(0)
    const AllSeasons = ref(scheduleAll)
    
    // const AllTeams = ref(teams)
    // const homeTeam = computed(() => {
    //   return AllTeams.value.filter(team => {
    //     return team.name.includes('Brooklyn')
    //   })
    // })

    //console.log(playingDay.value)


    const dir = ref('left')
    const beforeEnter = (el) => {
      console.log('before enter - set initial state')
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => { 
      console.log('starting to enter - make transition')
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done
      })
    }
    const afterEnter = () => {
      console.log('after enter')
    }
    const setDateByWeek = (week) => {
      console.log(chosenPlayingDay.value)
      console.log(AllSeasons.value[currentYear.value].weeks[week].days[0])
      //console.log(AllSeasons.value[currentYear.value].weeks[week].days[0])
      chosenPlayingDay.value = new Date(AllSeasons.value[currentYear.value].weeks[week].days[0].date)
    }
    //console.log(AllSeasons.value)
    return {

      //...toRefs(state),
      AllSeasons,
      //AllTeams,
      currentWeek,
      currentYear,
      //homeTeam,
      nameOfDay,
      nameOfMonth,
      dir,
      datepickerPanelActive,
      chosenPlayingDay,
      //playingDay,
      // currentDate,
      // currentDay,
      // currentMonth,
      beforeDay,
      nextDay,

      beforeEnter,
      enter,
      afterEnter,
      setDateByWeek
    }
  },
  watch: {
    currentWeek(week) {
      console.log('menim current week')
      this.setDateByWeek(week)
    }
  }
}
</script>
<style lang="scss" scoped>
.datepicker {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bada55;
  width: 250px;
}
.close-button {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

  
  // padding: 1rem;
  // transition: all 300ms ease-in;
  // transform: translateX(100px);
  h3 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: #ffffff44;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }
  span {
    font-size: 2rem;
    
  }
  ul {
    margin-top: 2rem;
  }
  ul li {
    
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.267);
  }
  i {
      z-index: 10;
      padding: 1rem;
      color: #ffffff44;
      transition: all 100ms ease-in;
      text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    }
    i:hover {
      cursor: pointer;
      color: #ffffff;
      transform: scale(1.2);
    }
  .controller {
    position: relative;
    width: 100%;
    height: 85px;
    .left {
      position: absolute;
      left: 0;
      top: 1rem;
    }
    .right {
      position: absolute;
      right: 0;
      top: 1rem;
    }
    .controller-text {
      font-size: 2rem;
      text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
      position: absolute;
      width: 100%;
      top: 1rem;
      left: 0;
      right: 0;
    }
  }

.bottom-section {
  h3, h4 {
    font-size: 0.8rem;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;
    transition: all 300ms ease-in;
  }
  // li:hover {
  //   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // }
  ul li {
    border: none;
  }
}
</style>