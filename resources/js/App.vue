<template>
  
  <div class="container m-auto">
    <main class="">
      <CurrentMatch v-if="matchesLoad" :matches="matches" :match="currentPlayingDay[0].matches[0]" />
      <!-- <section class="home-team">
        <TeamInfo :stats="stats" :id="currentPlayingDay[0].matches[0].home_team" />
        
      </section>
      
      <section class="visitor-team">
        <TeamInfo :id="currentPlayingDay[0].matches[0].visitor_team" />
      </section> -->
      
    </main>
    <footer v-show="teams" class="current-round">
      <h1>today's game</h1>
      <ul>
        <li v-for="(match, index) in currentPlayingDay[0].matches" :key="index">
            <!-- {{ match }} -->
            <!-- {{ teams[1].short_name }} -->
          <div class="visitor badge">
            <Team v-show="teams.length > 0" :id="match.home_team" />
              
            <h2>100</h2>
          </div>
          <div class="home badge">
            <Team  v-show="teams.length > 0" :id="match.visitor_team" />
              
            <h2></h2>
          </div>
        </li>
      </ul>
    </footer>
  </div>

<!-- v-if datepicker active -->
  <aside v-if="!datepickerPanelActive" @click="datepickerPanelActive = !datepickerPanelActive" class="datepicker-panel">
    <div class="current-date">
      {{ nameOfDay[chosenPlayingDay.getDay()] }}, {{ nameOfMonth[chosenPlayingDay.getMonth()] }} {{ chosenPlayingDay.getDate() }}
      <span>{{ currentWeek[0].name }} | {{ currentPlayingDay[0].matches.length }} Games</span>
    </div>
  </aside>

  <aside v-else>
    <Datepicker />
  </aside>

<!-- v-if admin panel active -->
  <aside v-if="!adminPanelActive" class="admin-panel-button">
    <h1 @click="adminPanelActive = !adminPanelActive">admin panel</h1>
    <!-- <h2 @click.prevent="dateMenuOpen = !dateMenuOpen" :class="{menuOpen: dateMenuOpen}">choose date</h2> -->

    <!-- <transition name="open-menu">
      <Datepicker v-show="dateMenuOpen" />
    </transition> -->
  </aside>
  
  <aside class="admin-panel" v-else>
    <AdminPanel :match="currentMatch" @adminPanelActived="adminPanelActive = $event" />    
  </aside>

</template>

<script>
import { ref, computed, provide } from 'vue'
import axios from 'axios'
import { scheduleAll } from '../assets/data/schedule'
import { teamsAll } from '../assets/data/teams'
import TableComponent from './components/TableComponent.vue'
import Editable from './components/Editable.vue'
import AdminPanel from './components/AdminPanel.vue'
import Datepicker from './components/Datepicker.vue'
import Team from './components/Team.vue'
import TeamInfo from './components/TeamInfo.vue'
import CurrentMatch from './components/CurrentMatch.vue'

export default {
  components: {
    TableComponent,
    Editable,
    AdminPanel,
    Datepicker,
    Team,
    TeamInfo,
    CurrentMatch
  },
  setup () { 
    const teams = ref(teamsAll)
    const players = ref()
    const stats = ref()
    const matches = ref()
    const matchesLoad = ref(false)
    const matchLoad = ref(false)
    //console.log(teams.value[0].name)
    const nameOfDay = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    const nameOfMonth = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
    const chosenPlayingDay = ref(new Date('2021-10-19'))
    const currentDay = ref(nameOfDay.value[chosenPlayingDay.value.getDay()])
    const currentDate = ref(chosenPlayingDay.value.getDate())
    const currentMonth = ref(nameOfMonth.value[chosenPlayingDay.value.getMonth()])
    const currentYear = ref(chosenPlayingDay.value.getFullYear)
    const adminPanelActive = ref(false)
    const dateMenuOpen = ref(false)
    const schedule = ref(scheduleAll)
    const datepickerPanelActive = ref(false)
    
    //console.log(nameOfDay.value[chosenPlayingDay.value.getDay()],nameOfMonth.value[chosenPlayingDay.value.getMonth()],chosenPlayingDay.value.getDate())
    
    const beforeDay = () => {
      console.log('vajci')
      //console.log(chosenPlayingDay.value.setDate(chosenPlayingDay.value.getDate() - 1), chosenPlayingDay.value.getDate())
      chosenPlayingDay.value = new Date(chosenPlayingDay.value.setDate(chosenPlayingDay.value.getDate() - 1))
    }

    const nextDay = () => {
      console.log('vajci')
      chosenPlayingDay.value = new Date(chosenPlayingDay.value.setDate(chosenPlayingDay.value.getDate() + 1))
    }

    const currentWeek = computed(() => {
      return data[0].weeks.filter(week => {
        return week.playing_dates.includes(chosenPlayingDay.value.toJSON().substring(0,10))
      })
    })

    const currentPlayingDay = computed(() => {
      //console.log('currentWeek', currentWeek.value)
      return currentWeek.value[0].days.filter(day => {
        return day.date.includes(chosenPlayingDay.value.toJSON().substring(0,10))
      })
    })

    const currentMatch = computed(() => {
      return currentPlayingDay.value[0].matches[0]
    })
    const currentMatchDB = ref()
    // const currentMatchDB = computed(() => {
    //   return matches.value.filter(match => {
    //     return match.id === currentMatch.value.id
    //   })
    // })

    //console.log(schedule.value)
    let data = schedule.value.filter(el => {
      return el.yearFrom.includes('2021')
    })
    //console.log(data)
    //console.log(data)
    let week = data[0].weeks.filter(week => {
      //console.log(new Date().toJSON().substring(0,10))
      //console.log(week)
      return week.playing_dates.includes(new Date().toJSON().substring(0,10))
      // let dateFrom = new Date(week.from_date)
      // let dateTo = new Date(week.to_date)
      // let activeDay = new Date('2021-11-08')
      // //console.log(dateFrom.getTime())
      // //console.log(dateTo.getTime())
      // if (dateFrom.getTime() <= activeDay.getTime() && dateTo.getTime() >= activeDay.getTime() ) {
      //   return week
      // }
    })
    //console.log(week)
    const vajci = computed(() => {
      return week[0].days[0].matches.filter(match => {
        return match.date.includes('2021-11-08')
      })
    })
    
    //console.log(vajci.value[0])
    // const teams = ref([])

    axios.get('/api/players').then(response => {
      players.value = response.data
    })
    axios.get('/api/stats').then(response => {
      stats.value = response.data
    })
    const getStats = () => {
      axios.get('/api/matches').then(response => {
        matches.value = response.data
        console.log(stats.value)
        matchesLoad.value = true
        matches.value.filter(match => {
          console.log(match.id, currentMatch.value.id)
          if (match.id === currentMatch.value.id) {
            currentMatchDB.value = match
          }
        })
      })
    }
    getStats()
    //console.log(week[0].days[0].matches)

    provide('teams', teams)
    provide('schedule', schedule)
    provide('chosenPlayingDay', chosenPlayingDay)
    provide('players', players)
    provide('stats', stats)
    provide('matches', matches)
    provide('getStats', getStats)
    provide('datepickerPanelActive', datepickerPanelActive)
    provide('beforeDay', beforeDay)
    provide('nextDay', nextDay)
    // provide('currentMatch', currentPlayingDay.value[0].matches[0])
    
    return {
        teams,
        adminPanelActive,
        dateMenuOpen,
        currentDay,
        currentMonth,
        currentDate,
        currentWeek,
        currentPlayingDay,
        currentMatch,
        //currentMatchDB,
        chosenPlayingDay,
        matches,



        beforeDay,
        nextDay,
        nameOfDay,
        nameOfMonth,
        players,
        stats,
        datepickerPanelActive,
        matchesLoad,
        

        week,
        vajci
    }
  }
}
</script>
<style lang="scss" scoped>
.datepicker-panel {
  position: absolute;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
}
</style>