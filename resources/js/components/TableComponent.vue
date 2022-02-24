<template>
  <h1>{{ team }}: {{ currentTeam[0].name }} (4-2)</h1>
  <table :class="{ active: allStats}" class="table-container">
    <thead class="table-header">
      <tr>
      <!-- <td>&nbsp;</td> -->
        <td>PLAYER NAME</td>
        <td>STATUS</td>
        <td>POS</td>
        <td>MIN</td>
        <td>FG</td>
        <td>FGA</td>
        <td>3P</td>
        <td>3PA</td>
        <td>FT</td>
        <td>FTA</td>
        <td>OR</td>
        <td>DR</td>
        <td>TOT</td>
        <td>A</td>
        <td>PF</td>
        <td>ST</td>
        <td>TO</td>
        <td>BS</td>
        <td>+/-</td>
        <td>PTS</td>     
        <td>&nbsp;</td>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
        <td>
          <VueMultiselect
                    :options="homePlayers"
                    v-model="selectedPlayer"
                    _close-on-select="false" 
                    :clear-on-select="false"
                    :preserve-search="true" 
                    placeholder="Pick some" 
                    label="full_name" 
                    track-by="full_name"
                  >
                  </VueMultiselect>
        </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr> -->
        <Player :match_id="match.id" v-for="(player, index) in teamPlayers" :key="index" :player="player" :index="index" />
    </tbody> 
    <tfoot>
      <tr class="overall-stats" v-if="submittedStats.length > 1">
        <td>overall stats</td>
        <td></td>
        <td></td>
        <td>{{ overall('min').reduce(reducer) }}</td>
        <td>{{ overall('fg').reduce(reducer) }}</td>
        <td>{{ overall('fga').reduce(reducer) }}</td>
        <td>{{ overall('threep').reduce(reducer) }}</td>
        <td>{{ overall('threepa').reduce(reducer) }}</td>
        <td>{{ overall('ft').reduce(reducer) }}</td>
        <td>{{ overall('fta').reduce(reducer) }}</td>
        <td>{{ overall('or').reduce(reducer) }}</td>
        <td>{{ overall('dr').reduce(reducer) }}</td>
        <td>{{ overall('tot').reduce(reducer) }}</td>
        <td>{{ overall('a').reduce(reducer) }}</td>
        <td>{{ overall('pf').reduce(reducer) }}</td>
        <td>{{ overall('st').reduce(reducer) }}</td>
        <td>{{ overall('to').reduce(reducer) }}</td>
        <td>{{ overall('bs').reduce(reducer) }}</td>
        <td>-</td>
        <td>{{ overall('pts').reduce(reducer) }}</td>
    </tr>
    </tfoot>                   
   </table>
   <!-- <button v-show="submittedStats.length == 17">SEND ME TO THE RIC MOURE</button> -->
</template>

<script>
import { ref, computed, inject } from 'vue'
import Editable from './Editable.vue'
//import { teamsAll } from '../../assets/data/teams'
import axios from 'axios'
import Player from './Player.vue'
import VueMultiselect from 'vue-multiselect'


export default {
    emits: ["submitted-data-change"],
    components: {
      Editable,
      Player,
      VueMultiselect
    },
    props: {
      match: {
        type: Object,
        required: true
      },
      team: {
        type: String,
        required: true
      }
    },
    setup (props) {
      
      //const match = inject('currentMatch')
      const allStats = ref(false)
      const teams = inject('teams')
      const players = inject('players')
      const selectedPlayer = ref()
      const stats = inject('stats')
      console.log('stats', stats.value)
      // const inactivePlayers = ref([])
      // axios.get('/api/players/').then(response => {
      //   players.value = response.data
      //   console.log(players.value)
      // })
      // axios.get('/api/teams/').then(response => {
      //   teams.value = response.data
      //   console.log(teams.value)
      // })
      const submittedStats = ref()
      submittedStats.value = stats.value.filter(stat => {
          return stat.team_id == props.match[`${props.team}` + `_team`] && stat.match_id == props.match.id
        })
      // const submittedStats = computed(() => {
      //   return stats.value.filter(stat => {
      //     return stat.team_id == props.match[`${props.team}` + `_team`] && stat.match_id == props.match.id
      //   })
        
      // })
     
      const homePlayers = computed(() => {
        return players.value.filter(player => {
          //console.log(player.team_id)
          return player.team_id == props.match.home_team
          //return player.team_id.includes(props.match.home_team)
        })
      })
      const teamPlayers = computed(() => {
        return players.value.filter(player => {
          //console.log(player.team_id)
          return player.team_id == props.match[`${props.team}` + `_team`]
          //return player.team_id.includes(props.match.home_team)
        })
      })
      //console.log(homePlayers.value)
      
      const addingPlayer = ref(false)

      const currentTeam = computed(() => {
        return teams.value.filter(team => {
          //console.log(props.match.visitor_team)
          if (team.id == props.match[`${props.team}` + `_team`]) {  // .visitor_team
            return team
          }
        })
      })
      const homeTeam = computed(() => {
        return teams.value.filter(team => {
          //console.log(team)
          if (team.id == props.match.home_team) {
            return team
          }
        })
      })

      // const submittedStats = ref([])
      const reducer = (previouslyValue, currentValue) => previouslyValue + currentValue
      const overall = (type) => {
              return submittedStats.value.map(stat => {
                //console.log(stat[type])
                return stat[type]
              })
            }
      //console.log(overall('pts').reduce(reducer))
      
      const overallStats = computed(()=> {
        let vajci =  overall('pts')
        //console.log(vajci)
        if (vajci.length >= 1) {
          return vajci.reduce(reducer)
        }
      })

      if (teamPlayers.value.length == submittedStats.value.length) {
          console.log('vsechny data byla vlozena')
          allStats.value = true
        }

      // watch(() => {
      //   emit('submitted-data-change', submittedStats)
      // })
        
      return {
        allStats,
        addingPlayer,
        teams,
        currentTeam,
        teamPlayers,
        homePlayers,
        homeTeam,
        players,
        submittedStats,
        overallStats,
        selectedPlayer,
        overall,
        reducer
      }
    },
    watch: {
      submittedStats() {
        this.$emit('submitted-data-change', this.submittedStats)
        
      }
    }
}
</script>

<style>
table {
  border-collapse: collapse;
}
.player-name {
  white-space: nowrap;
}
/* tr {
  border: 1px solid #ccc
} */
/* tr.add-player {
  border: 1px solid black;
  background: black;
} */
/* .table-header {
  width: 100%;
} */
/* .table-header td {
  border-bottom: 1ps solid black;
  white-space: nowrap;
}
.add-player i:hover {
  color: red;
  cursor: pointer;
} */
input {
  width: 100%;
}
.active {
  background-color: #bada55;
}
.overall-stats {
  border-top: 1px solid black;
}
</style>