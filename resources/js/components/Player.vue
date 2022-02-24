<template>
    <!-- POKUD HRAC NEMAM STATS -->
    <tr v-if="!playerHasStats" :class="{ submitted: submitted, disabled: playerHasStats}">
        <td class="player-name">{{ player.full_name }}</td>
        
        <td>
            <!-- <VueMultiselect
                :options="playerStatus"
                v-model="selectedStatus"
                placeholder="active???" 
            >
            </VueMultiselect> -->
            
            <select v-model="selectedStatus" name="vajci" class="player-status">
                <option class="selected" value="active">ACTIVE</option>
                <option value="inactive">INACTIVE</option>
                <option value="DNP">DNP</option>
            </select>
        </td>
        <td>{{ player.position }}</td>
        <td><input v-model="min" type="text" placeholder="-"></td>
        <td><input v-model="fg" type="text" placeholder="-"></td>
        <td><input v-model="fga" type="text" placeholder="-"></td>
        <td><input v-model="threep" type="text" placeholder="-"></td>
        <td><input v-model="threepa" type="text" placeholder="-"></td>
        <td><input v-model="ft" type="text" placeholder="-"></td>
        <td><input v-model="fta" type="text" placeholder="-"></td>
        <td><input v-model="or" type="text" placeholder="-"></td>
        <td><input v-model="dr" type="text" placeholder="-"></td>
        <td><input v-model="tot" type="text" placeholder="-"></td>
        <td><input v-model="a" type="text" placeholder="-"></td>
        <td><input v-model="pf" type="text" placeholder="-"></td>
        <td><input v-model="st" type="text" placeholder="-"></td>
        <td><input v-model="to" type="text" placeholder="-"></td>
        <td><input v-model="bs" type="text" placeholder="-"></td>
        <td><input v-model="plusminus" type="text" placeholder="-"></td>
        <td><input v-model="pts" type="text" placeholder="-"></td>
        <td :class="{ disabled: playerHasStats }" @click="submitStats(); submitted = true">submit</td>
        <!-- <td>submit</td> -->
    </tr>




    <!-- POKUD HRAC MA STATS -->
    <tr class="submitted" v-else>
        <td class="player-name">{{ player.full_name }}</td>
        
        <td>{{ player.status }}</td>
        <td v-show="selectedStatus === 'active'">{{ player.position }}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].min}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].fg}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].fga}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].threep}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].threepa}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].ft}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].fta}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].or}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].dr}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].tot}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].a}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].pf}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].st}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].to}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].bs}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].plusminus}}</td>
        <td v-show="selectedStatus === 'active'">{{playerStatsThisMatch[0].pts}}</td>
        <td></td>
    </tr>
</template>

<script>
import { ref, inject, computed } from 'vue'
import axios from 'axios'
import VueMultiselect from 'vue-multiselect'
import mitt from 'mitt'



export default {
    components: {
        VueMultiselect,
    },
    props: {
        player: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required:true
        },
        match_id: {
            type: Number,
            required: true
        }
    },
    setup (props) {
        const innactiveStatus = inject('innactives-home')
        const stats = inject('stats')
        const getStats = inject('getStats')
        //console.log(props.player)
        const id = ref(props.player.id)
        const player = ref(props.player)
        const min = ref()
        const fg = ref()
        const fga = ref()
        const threep = ref()
        const threepa = ref()
        const ft = ref()
        const fta = ref()
        const or = ref()
        const dr = ref()
        const tot = ref()
        const a = ref()
        const pf = ref()
        const st = ref()
        const to = ref()
        const bs = ref()
        const plusminus = ref()
        const pts = ref()
        const submitted = ref(false)
        const playerStats = ref(null)
        const playerStatus = ref([
            'active',
            'inactive',
            'DNP'
        ])
        const selectedStatus = ref('active')
        const statsSubmitted = computed(() => {
            return stats.value.filter(stat => {
                return stat.match_id == props.match_id
            })
        })
        const playerStatsThisMatch = computed(() => {
            return stats.value.filter(stat => {
                return stat.player_id == props.player.id
            })
        })
        //console.log(playerStatsThisMatch.value)
        const playerHasStats = ref(false)
        statsSubmitted.value.filter(stat => {
            //console.log(props.player.id)
            if(stat.player_id == props.player.id) {
                //console.log('uz jsem ulozenej vajci')
                playerHasStats.value = true
            }
        })
        const submitStats = () => {
            if (!selectedStatus.value) {
                console.log('nemas status')
                return 
            } else {
                console.log('neco vajci')
                let currentId = null
                if (stats.value.length == 0) {
                    console.log('nemam zadne data')
                    currentId = 1
                } else {
                    //console.log('ide je', stats.value[stats.value.length - 1].id + 1)
                    currentId = stats.value[stats.value.length - 1].id + 1
                }
                let stat = {
                    id: currentId,
                    player_id: props.player.id,
                    match_id: props.match_id,
                    team_id: props.player.team_id,
                    status: selectedStatus.value,
                    min: parseInt(min.value),
                    fg: parseInt(fg.value),
                    fga: parseInt(fga.value),
                    threep: parseInt(threep.value),
                    threepa: parseInt(threepa.value),
                    ft: parseInt(ft.value),
                    fta: parseInt(fta.value),
                    or: parseInt(or.value),
                    dr: parseInt(dr.value),
                    tot: parseInt(tot.value),
                    a: parseInt(a.value),
                    pf: parseInt(pf.value),
                    st: parseInt(st.value),
                    to: parseInt(to.value),
                    bs: parseInt(bs.value),
                    plusminus: parseInt(plusminus.value),
                    pts: parseInt(pts.value)
                    //status: true
                }
                console.log(Object.values(stat), Object.keys(stat).length)
                // if (Object.keys(stat) === null) {
                //     console.log('vajci jsou prazdne')
                // } else {
                //     console.log('vajci jsou naplneny ty hlavo hnusna')
                // }
                Object.entries(stat).forEach(zaznam => {
                    if(isNaN(zaznam) && selectedStatus.value == 'active') {
                        console.log('nejsou zaznamy')
                    } else {
                        playerStats.value = stat
                        console.log('jsou zaznamy prej')
                        // axios.post('/api/stats', stat).then(console.log)
                        // axios.patch('/api/players/' + props.player.id, {
                        //     status: selectedStatus.value
                        // }).then(console.log)
                        //$emit('stat-submitted', stat)
                        //console.log(playerStats.value)
                        //this.emitter.emit('test', 'Welcome vajci')

                        getStats()
                    }
                })
                //console.log(stat)
                playerStats.value = stat
                axios.post('/api/stats', stat).then(console.log)
                axios.patch('/api/players/' + props.player.id, {
                    status: selectedStatus.value
                }).then(console.log)
                //$emit('stat-submitted', stat)
                //console.log(playerStats.value)
                //this.emitter.emit('test', 'Welcome vajci')
                getStats()
            }
            
        }
    
        return {
            min, fg, fga, threep, threepa, ft, fta, or, dr, tot, a, pf, st, to, bs, plusminus, pts, id, player,
            submitStats,
            submitted,
            playerStats,
            playerStatus,
            selectedStatus,
            innactiveStatus,
            playerHasStats,
            statsSubmitted,
            stats,
            playerStatsThisMatch
        }
    },
    watch: {
        submitted() {
            //console.log('odesilam vajci')
            this.$emit('subbmited-stat', this.playerStats)
            if (this.selectedStatus.value == 'active') {
                this.playerStats.value.forEach(stat => {
                    console.log(stat)
                });
                console.log('jsem zdrav vajci')
            } else {
                this.innactiveStatus.push(this.player)
                //this.$emit('inactive-player', this.player)
                //console.log(this.player)
            }
        }
    }
}
</script>

<style scoped>

.player-status {
    cursor: pointer;
    background-color: transparent;
    height: 38px;
}
td:last-child {
    padding: 0 1rem;
}
tr {
    border: 1px solid transparent;
    cursor: pointer;
}
input:focus-visible {
    background-color: turquoise;
}
td input {
    background-color: transparent;
    font-size: 1.4rem;
    padding: 0.3rem 0;
}
.submitted {
    background-color: #bada552e;
}
tr:hover {
    background-color: #40e0d01a;
    border: 1px solid turquoise;
}
</style>