<template>
    <div>
        <h1>Hello {{ title }}</h1>

        <div>
            {{ results }}
        </div>

        <h2>Total compteurs : {{ total }}</h2>
        <counter @count="total += $event"></counter>
        <counter :start="5" :max="10" @count="total += $event"></counter>
        <mon-composant></mon-composant>
        <mon-composant></mon-composant>

        <h2>Liste d'utilisateurs:</h2>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                {{ user.firstName }} {{ user.lastName }}
            </li>
        </ul>

        <user-form v-model="user" @saved="users.push($event)" />
    </div>
</template>

<script>
import Counter from '../components/Counter'
import MonComposant from '../components/MonComposant'
import UserForm from '../components/UserForm'

export default {
    components: { Counter, MonComposant, UserForm },
    data() {
        return {
            title: 'Vue CLI',
            total: 5,
            users: [
                { firstName: 'Matthieu', lastName: 'Mota' },
                { firstName: 'Marina', lastName: 'Mota' },
            ],
            user: {
                firstName: '', lastName: ''
            },
            results: [],
        }
    }
}
</script>

<style>
    h1 {
        color: red;
    }
</style>
