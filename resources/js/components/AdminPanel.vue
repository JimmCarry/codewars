<template>
    <div id="admin-score-report">

      <div @click="adminPanelActive = !adminPanelActive" class="close-button" >
        close me
      </div>

      <div class="tabs">
          <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">FINAL BOX</a>
          <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">2st Quarter</a>
          <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">3st Quarter</a>
          <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">4st Quarter</a>
          <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">1st Quarter</a>
      </div>

      <div class="content">

        <div v-if="activetab === 1" class="tabcontent">

          <div class="visitor report">

            <ul class="">
              <li class="title column">
                <h1>NATIONAL BASKETBALL ASSOCIATION</h1>
                <h1>OFFICIAL SCORER'S REPORT
                  <span>FINAL BOX</span>
                </h1>
              </li>
              
            </ul>

            <div class="report-general-menu">
              <ul>
                <li class="column">
                  <p>Sunday, April 18, 2021 Spectrum Center, Charlotte, NC</p>
                </li>
                <li class="column editable">
                  <p>Referees :</p>
                  <VueMultiselect
                    v-show="addRefereeOpen"
                    v-model="selectedReferees"
                    :options="referees"
                    :multiple="true"
                    _close-on-select="false" 
                    :clear-on-select="false"
                    :preserve-search="true" 
                    placeholder="Pick some" 
                    label="full_name" 
                    track-by="full_name"
                  >
                  </VueMultiselect>
                  <div v-if="!addRefereeOpen">
                    <i @click="addRefereeOpen = !addRefereeOpen" class="fas fa-plus"></i>
                  </div>

                  <div v-else>
                    <button>submit</button>
                    <i @click="addRefereeOpen = !addRefereeOpen" class="fas fa-minus"></i>
                  </div>
                  
                </li>
                <li class="column editable">
                  <p>Duration :</p>
                  <input v-model="gameDuration" v-show="addDurationOpen" type="text" placeholder="vajci">
                  <i @click="addDurationOpen = !addDurationOpen" class="fas fa-plus"></i>
                </li>
                <li class="column editable">
                  <p>Attendance:</p>
                  <input v-model="attendance" v-show="addAttendanceOpen" type="number" placeholder="attendance">
                  <i @click="addAttendanceOpen = !addAttendanceOpen" class="fas fa-plus"></i>
                </li>
              </ul>
              
            </div>
              <TableComponent @submitted-data-change="submittedStatsVisitor = $event" :team="'visitor'" :match="match" />
              <TableComponent @submitted-data-change="submittedStatsHome = $event" :team="'home'" :match="match" />
              <div class="score-report">
                <table>
                    <tr>
                        <td>SCORE BY PERIOD</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>FINAL</td>
                    </tr>
                    <tr>
                        <td>Rockets</td>
                        <td><input v-model="scoreFirstHome" type="text" placeholder="22"></td>
                        <td><input v-model="scoreSecondHome" type="text" placeholder="25"></td>
                        <td><input v-model="scoreThirdHome" type="text" placeholder="25"></td>
                        <td><input v-model="scoreFourthHome" type="text" placeholder="27"></td>
                        <td><input v-model="scoreFinalHome" type="text" placeholder="99"></td>
                    </tr>
                    <tr>
                        <td>NUGGETS</td>
                        <td><input v-model="scoreFirstVisitor" type="text" placeholder="31"></td>
                        <td><input v-model="scoreSecondVisitor" type="text" placeholder="22"></td>
                        <td><input v-model="scoreThirdVisitor" type="text" placeholder="29"></td>
                        <td><input v-model="scoreFourthVisitor" type="text" placeholder="23"></td>
                        <td><input v-model="scoreFinalVisitor" type="text" placeholder="105"></td>
                    </tr>
                </table>
                <button @click="postMatchStats">submit - score by period</button>
              <ul class="inactive-players">
                <li>
                  <p>Inactive: Rockets</p>
                  <span v-for="innactive in innactivesHome" :key="innactive.id">{{ innactive.full_name }}</span>
                </li>
                <li>
                  <p>Inactive: Nuggets</p>
                </li>
              </ul>
              <ul class="second-stats">
                <li>
                  <p> Points in the Paint:</p>

                  <div class="pointer" v-show="pointsInThePaintOpen">
                    <p>Nuggets:</p>
                    <input v-model="pointsInThePaintPointsVisitor" type="number" placeholder="-">
                    <input v-model="pointsInThePaintMadeVisitor" type="number" placeholder="-"> /
                    <input v-model="pointsInThePaintAttempVisitor" type="number" placeholder="-">
                  </div>
              
                  <div class="pointer" v-show="pointsInThePaintOpen">
                    <p>Rockets:</p>
                    <input v-model="pointsInThePaintPointsHome" type="number" placeholder="-">
                    <input v-model="pointsInThePaintMadeHome" type="number" placeholder="-"> /
                    <input v-model="pointsInThePaintAttempHome" type="number" placeholder="-">
                  </div>

                  <i @click="pointsInThePaintOpen = !pointsInThePaintOpen" class="fas fa-plus"></i>
                </li>
                <li>
                  <p> Biggest Lead: Rockets</p>
                  <div class="pointer" v-show="biggestLeadOpen">
                    <p>Nuggets:</p>
                    <input v-model="biggestLeadVisitor" type="number" placeholder="-">
                  </div>
              
                  <div class="pointer" v-show="biggestLeadOpen">
                    <p>Rockets:</p>
                    <input v-model="biggestLeadHome" type="number" placeholder="-">
                  </div>
                  
                  <i @click="biggestLeadOpen = !biggestLeadOpen" class="fas fa-plus"></i>
                </li>
                <li>
                  <p> 2nd Chance Points: Rocket</p>
                  <div class="pointer" v-show="secondChancePointsOpen">
                    <p>Nuggets:</p>
                    <input v-model="secondChancePointsVisitor" type="number" placeholder="-">
                    <input v-model="secondChancePointsMadeVisitor" type="number" placeholder="-"> /
                    <input v-model="secondChancePointsAttempsVisitor" type="number" placeholder="-">
                  </div>
              
                  <div class="pointer" v-show="secondChancePointsOpen">
                    <p>Rockets:</p>
                    <input v-model="secondChancePointsHome" type="number" placeholder="-">
                    <input v-model="secondChancePointsMadeHome" type="number" placeholder="-"> /
                    <input v-model="secondChancePointsAttempsHome" type="number" placeholder="-">
                  </div>
                  
                  <i @click="secondChancePointsOpen = !secondChancePointsOpen" class="fas fa-plus"></i>
                </li>
                <li>
                  <p>Lead Changes:</p>
                  <input v-model="leadChanges" v-show="leadChangesOpen" type="number" placeholder="-">
                  <i @click="leadChangesOpen = !leadChangesOpen" class="fas fa-plus"></i>
                </li>
                <li>
                  <p> Fast Break Points:</p>
                  <div class="pointer" v-show="fastBreakPointsOpen">
                    <p>Nuggets:</p>
                    <input v-model="fastBreakPointsVisitor" type="number" placeholder="-">
                    <input v-model="fastBreakPointsMadeVisitor" type="number" placeholder="-"> /
                    <input v-model="fastBreakPointsAttempsVisitor" type="number" placeholder="-">
                  </div>
              
                  <div class="pointer" v-show="fastBreakPointsOpen">
                    <p>Rockets:</p>
                    <input v-model="fastBreakPointsHome" type="number" placeholder="-">
                    <input v-model="fastBreakPointsMadeHome" type="number" placeholder="-"> /
                    <input v-model="fastBreakPointsAttempsHome" type="number" placeholder="-">
                  </div>
                  
                  <i @click="fastBreakPointsOpen = !fastBreakPointsOpen" class="fas fa-plus"></i>
                </li>
                
                <li>
                  <p>Times Tied:</p>
                  
                    <input v-model="timesTied" v-show="timesTiedOpen" type="number" placeholder="-" >
                    <i @click="timesTiedOpen= !timesTiedOpen" class="fas fa-plus"></i>
                  
                  
                </li>
              </ul>
          </div>
        </div>
          
      </div>

      <div v-if="activetab === 2" class="tabcontent">
          Caught in a landslide, no escape from reality
      </div>
      <div v-if="activetab === 3" class="tabcontent">
          Open your eyes, look up to the skies and see
      </div>
      <div v-if="activetab === 4" class="tabcontent">
          Vajci vajci vajci
      </div>
        
    </div>
      
  </div>
</template>

<script>
import { ref, provide, inject, computed } from 'vue'
import TableComponent from './TableComponent.vue'
import axios from 'axios'
import VueMultiselect from 'vue-multiselect'

export default {
    components: {
        TableComponent,
        VueMultiselect,
    },
     props: {
      match: {
        type: Object,
        required: true
      }
    },
    setup (props) {
        const stats = inject('stats')
        const submittedStatsVisitor = ref([])
        const submittedStatsHome = ref([])
        console.log(props.match)
        // STATS
        const matchStats = computed(() => {
          return stats.value.filter(stat => {
            return stat.match_id === props.match.id
          })
        })
        const visitorTeamStats = computed(() => {
          console.log(matchStats.value)
          console.log(props.match.visitor_team)
          
          return matchStats.value.filter(stat => {
            return stat.team_id === props.match.visitor_team
          })
        })
        const homeTeamStats = computed(() => {
          console.log(matchStats.value)
          console.log(props.match.home_team)
          
          return matchStats.value.filter(stat => {
            return stat.team_id === props.match.home_team
          })
        })
        const reducer = (previouslyValue, currentValue) => previouslyValue + currentValue
        const overall = (type, stats) => {
                return stats.map(stat => {
                  //console.log(stat[type])
                  return stat[type]
                })
              }
        //console.log(overall('pts').reduce(reducer))
        
        const overallStatsVisitor = computed(()=> {
          let vajci =  overall('pts', visitorTeamStats.value)
          //console.log(vajci)
          if (vajci.length >= 1) {
            return vajci.reduce(reducer)
          }
        })
        const overallStatsHome = computed(()=> {
          let vajci =  overall('pts', homeTeamStats.value)
          //console.log(vajci)
          if (vajci.length >= 1) {
            return vajci.reduce(reducer)
          }
        })

        const inactiveVajci = ref([])
        const activetab = ref(1)
        const adminPanelActive = ref(true)

        const addRefereeOpen = ref(false)
        const addDurationOpen = ref(false)
        const addAttendanceOpen = ref(false)

        const referees = ref([])
        const addReferee = () => {

        }
        const options = ref([
          'Batman',
          'Robin',
          'Joker'
        ])
        const selectedReferees = ref([])
        const gameDuration = ref()
        const attendance = ref()

  	    const pointsInThePaintPointsHome = ref()
        const pointsInThePaintMadeHome = ref()
        const pointsInThePaintAttempHome = ref()
        const pointsInThePaintPointsVisitor = ref()
        const pointsInThePaintMadeVisitor = ref()
        const pointsInThePaintAttempVisitor = ref()
        const pointsInThePaintOpen = ref(false)

  	    const biggestLeadHome = ref()
        const biggestLeadVisitor = ref()
        const biggestLeadOpen = ref(false)

  	    const secondChancePointsHome = ref()
        const secondChancePointsAttempsHome = ref()
        const secondChancePointsMadeHome = ref()
        const secondChancePointsVisitor = ref()
        const secondChancePointsAttempsVisitor = ref()
        const secondChancePointsMadeVisitor = ref()
        const secondChancePointsOpen = ref(false)

  	    const leadChanges = ref()
        const leadChangesOpen = ref(false)


  	    const fastBreakPointsHome = ref()
        const fastBreakPointsMadeHome = ref()
        const fastBreakPointsAttempsHome = ref()
        const fastBreakPointsVisitor = ref()
        const fastBreakPointsMadeVisitor = ref()
        const fastBreakPointsAttempsVisitor = ref()
        const fastBreakPointsOpen = ref(false)

  	    const timesTied = ref()
        const timesTiedOpen = ref(false)

        const innactivesHome = ref([])
        const innactivesVisitor = ref([])

        // SCORE REPORT CONST
        const scoreFinalHome = ref()
        const scoreFinalVisitor = ref()
        const scoreFirstHome = ref()
        const scoreSecondHome = ref()
        const scoreThirdHome = ref()
        const scoreFourthHome = ref()
        const scoreFirstVisitor = ref()
        const scoreSecondVisitor = ref()
        const scoreThirdVisitor = ref()
        const scoreFourthVisitor = ref()

        const objectMatch = ref()

        const postMatchStats = () => {
          console.log('odesilam data')
          let match = {
            id: 1,
            game_duration: gameDuration.value,
            attendance: attendance.value,
            hometeam_id: props.match.home_team,
            visitorteam_id: props.match.visitor_team,
            score_final_home: scoreFinalHome.value,
            score_final_visitor: scoreFinalVisitor.value,
            score_first_home: scoreFirstHome.value,
            score_first_visitor: scoreFirstVisitor.value,
            score_second_home: scoreSecondHome.value,
            score_second_visitor: scoreSecondVisitor.value,
            score_third_home: scoreThirdHome.value,
            score_third_visitor: scoreThirdVisitor.value,
            score_fourth_home: scoreFourthHome.value,
            score_fourth_visitor: scoreFourthHome.value,
            home_team_min: overall('min', homeTeamStats.value).reduce(reducer),

            home_team_min: overall('min', homeTeamStats.value).reduce(reducer),
            home_team_fg: overall('fg', homeTeamStats.value).reduce(reducer),
            home_team_fga: overall('fga', homeTeamStats.value).reduce(reducer),
            home_team_3p: overall('threep', homeTeamStats.value).reduce(reducer),
            home_team_3pa: overall('threepa', homeTeamStats.value).reduce(reducer),
            home_team_ft: overall('ft', homeTeamStats.value).reduce(reducer),
            home_team_fta: overall('fta', homeTeamStats.value).reduce(reducer),
            home_team_or: overall('or', homeTeamStats.value).reduce(reducer),
            home_team_dr: overall('dr', homeTeamStats.value).reduce(reducer),
            home_team_tot: overall('tot', homeTeamStats.value).reduce(reducer),
            home_team_a: overall('a', homeTeamStats.value).reduce(reducer),
            home_team_pf: overall('pf', homeTeamStats.value).reduce(reducer),
            home_team_st: overall('st', homeTeamStats.value).reduce(reducer),
            home_team_to: overall('to', homeTeamStats.value).reduce(reducer),
            home_team_bs: overall('bs', homeTeamStats.value).reduce(reducer),
            home_team_plusminus: overall('plusminus', homeTeamStats.value).reduce(reducer),
            home_team_pts: overall('pts', homeTeamStats.value).reduce(reducer),


            visitor_team_min: overall('min', visitorTeamStats.value).reduce(reducer),
            visitor_team_fg: overall('fg', visitorTeamStats.value).reduce(reducer),
            visitor_team_fga: overall('fga', visitorTeamStats.value).reduce(reducer),
            visitor_team_3p: overall('threep', visitorTeamStats.value).reduce(reducer),
            visitor_team_3pa: overall('threepa', visitorTeamStats.value).reduce(reducer),
            visitor_team_ft: overall('ft', visitorTeamStats.value).reduce(reducer),
            visitor_team_fta: overall('fta', visitorTeamStats.value).reduce(reducer),
            visitor_team_or: overall('or', visitorTeamStats.value).reduce(reducer),
            visitor_team_dr: overall('dr', visitorTeamStats.value).reduce(reducer),
            visitor_team_tot: overall('tot', visitorTeamStats.value).reduce(reducer),
            visitor_team_a: overall('a', visitorTeamStats.value).reduce(reducer),
            visitor_team_pf: overall('pf', visitorTeamStats.value).reduce(reducer),
            visitor_team_st: overall('st', visitorTeamStats.value).reduce(reducer),
            visitor_team_to: overall('to', visitorTeamStats.value).reduce(reducer),
            visitor_team_bs: overall('bs', visitorTeamStats.value).reduce(reducer),
            visitor_team_plusminus: overall('plusminus', visitorTeamStats.value).reduce(reducer),
            visitor_team_pts: overall('pts', visitorTeamStats.value).reduce(reducer),
            pointsinthepaintPointsHome: pointsInThePaintPointsHome.value,
            pointsinthepaintPointsVisitor: pointsInThePaintPointsVisitor.value,
            pointsinthepaintMadeHome: pointsInThePaintMadeHome.value,
            pointsinthepaintMadeVisitor: pointsInThePaintMadeVisitor.value,
            pointsinthepaintAttempHome: pointsInThePaintAttempHome.value,
            pointsinthepaintAttempVisitor: pointsInThePaintAttempVisitor.value,
            secondChancePointsHome: secondChancePointsHome.value,
            secondChancePointsVisitor: secondChancePointsVisitor.value,
            secondChancePointsMadeHome: secondChancePointsMadeHome.value,
            secondChancePointsMadeVisitor: secondChancePointsMadeVisitor.value,
            secondChancePointsAttempsHome: secondChancePointsAttempsHome.value,
            secondChancePointsAttempsVisitor: secondChancePointsAttempsVisitor.value,
            fastBreakPointsHome: fastBreakPointsHome.value,
            fastBreakPointsVisitor: fastBreakPointsVisitor.value,
            fastBreakPointsMadeHome: fastBreakPointsMadeHome.value,
            fastBreakPointsMadeVisitor: fastBreakPointsMadeVisitor.value,
            fastBreakPointsAttempsHome: fastBreakPointsAttempsHome.value,
            fastBreakPointsAttempsVisitor: fastBreakPointsAttempsVisitor.value,
            biggestLeadHome: biggestLeadHome.value,
            biggestLeadVisitor: biggestLeadVisitor.value,
            leadChanges: leadChanges.value,
            timesTied: timesTied.value
          }
          console.log(match)
          objectMatch.value = match
          axios.post('/api/matches', match).then(console.log)
  
        }

        

        const submit = () => {
            let data = {
                id: 24,
                score_final_home: scoreFinalHome.value,
                score_final_visitor: scoreFinalVisitor.value,
            }
        }

        axios.get('/api/referees/').then(response => {
          referees.value = response.data
          //console.log(referees.value)
        })

        //axios.post('/api/')
        provide('innactives-home', innactivesHome)
        provide('innactives-visitor', innactivesVisitor)
        provide('submitted-stats', submittedStatsVisitor)
        provide('submitted-stats', submittedStatsHome)
    
        return {
            submittedStatsVisitor,
            submittedStatsHome,
            activetab,
            adminPanelActive,
            scoreFinalHome,
            scoreFinalVisitor,
            scoreFirstHome,
            scoreSecondHome,
            scoreThirdHome,
            scoreFourthHome,
            scoreFirstVisitor,
            scoreSecondVisitor,
            scoreThirdVisitor,
            scoreFourthVisitor,

            addRefereeOpen,
            addDurationOpen,
            addAttendanceOpen,

            options,
            selectedReferees,

            referees,
            gameDuration,
            attendance,

            inactiveVajci,

            pointsInThePaintPointsHome,
            pointsInThePaintMadeHome,
            pointsInThePaintAttempHome,
            pointsInThePaintPointsVisitor,
            pointsInThePaintMadeVisitor,
            pointsInThePaintAttempVisitor,
            pointsInThePaintOpen,
            secondChancePointsHome,
            secondChancePointsMadeHome,
            secondChancePointsAttempsHome,
            secondChancePointsVisitor,
            secondChancePointsMadeVisitor,
            secondChancePointsAttempsVisitor,
            fastBreakPointsHome,
            fastBreakPointsMadeHome,
            fastBreakPointsAttempsHome,
            fastBreakPointsVisitor,
            fastBreakPointsMadeVisitor,
            fastBreakPointsAttempsVisitor,
            biggestLeadHome,
            biggestLeadVisitor,
            biggestLeadOpen,
            secondChancePointsOpen,
            leadChanges,
            leadChangesOpen,
            fastBreakPointsOpen,
            timesTied,
            timesTiedOpen,
            innactivesHome,
            innactivesVisitor,

            postMatchStats,
            matchStats,
            visitorTeamStats,
            homeTeamStats,
            overallStatsVisitor,

            submit
        }
    },
    watch: {
        adminPanelActive(value) {
            this.$emit('adminPanelActived', value)
        }
    },
    mounted () {
    this.emitter.on('test', (args) => {
      alert(args)
    })
  },
}
</script>
<style scoped>
.report-general-menu {
    display: flex;
}
.score-report {
    font-size: 1rem;
    margin-top: 1rem;
}  
.score-report tr:first-child {
  white-space: nowrap;
}
.score-report input {
    width: 100%;
}
.score-report table {
  width: 35%;
}
.second-stats {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.second-stats li {
  width: 50%;
  display: flex;
}
.second-stats li p {
  white-space: nowrap;
  padding: 0 0.5rem;
}
.second-stats li input {
  /* border-bottom: 1px solid black; */
  margin: 0 0.5rem;
}
.column {
  margin-bottom: 0.5rem;
}
.column:last-child {
  margin-bottom: 0;
}
.inactive-players {
  margin-top: 1rem;
  text-align: left;
}
.pointer {
  display: flex;
}
</style>