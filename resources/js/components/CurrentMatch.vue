<template>
    <div v-show="teams && matches" class="w-full flex flex-col grid justify-items-center">
        <div class="w-full flex items-center">
            <div id="visitor-team" class="w-1/3 flex flex-col items-center">
                <img class="w-16" src="/img/logos/BKN.svg" alt="">
                <h3>Nets{{ currentVisitorTeam.team_name }}</h3>
                <span>13-5</span>
            </div>
            <div class="flex w-1/3">
                <div class="w-1/3">102</div>
                <div class="w-1/3">FINAL</div>
                <div class="w-1/3">107</div>
            </div>
            <div id="home-team" class="w-1/3 flex flex-col items-center">
                <img class="w-16" src="/img/logos/MIL.svg" alt="">
                <h3>Milwaukee</h3>
                <span>7-6</span>
            </div>
        </div>
        <div class="w-full">
            <h4>Game Leaders</h4>
            <table class="w-1/2 m-auto">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>PTS</th>
                        <th>REB</th>
                        <th>AST</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <img src="" alt="">
                                </div>
                                <div>
                                    <a href="">
                                        <p>Kevin Durant</p>
                                        <p>BKN | #7  | F</p>
                                    </a>  
                                </div>
                            </td>
                            <td>27</td>
                            <td>6</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <img src="" alt="">
                                </div>
                                <div>
                                    <a href="">
                                        <p>Darius Garland</p>
                                        <p>CLE | #10  | G</p>
                                    </a>  
                                </div>
                            </td>
                            <td>24</td>
                            <td>5</td>
                            <td>11</td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
import { ref, inject, computed } from 'vue'

export default {
    props: {
        match: {
            type: Object,
            required: true
        },
        matches: {
            type: Array,
            required: true
        }
    },
    setup (props) {
        const matches= ref(props.matches)
        const teams= inject('teams')

        const currentMatch = computed(() => {
            //console.log(matches.value)
            return matches.value.filter(match => {
                //console.log(match)
                return match.id === props.match.id
            })
        })
        const currentVisitorTeam = computed(() => {
            return teams.value.filter(team => {
                //console.log(team.id, currentMatch.value[0].visitorteam_id)
                return team.id === currentMatch.value[0].visitorteam_id
            })
        })
    
        return {
            matches,
            currentMatch,
            currentVisitorTeam,
            teams
        }
    }
}
</script>

<style scoped>

</style>